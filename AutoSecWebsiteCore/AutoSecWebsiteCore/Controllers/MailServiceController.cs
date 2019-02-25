using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using AutoSecWebsiteCore.Models;
using Microsoft.Extensions.Configuration;
using System.IO;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AutoSecWebsiteCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailServiceController : ControllerBase
    {
        IConfiguration config { get; }
        AppSettingsModel AppSettings;
        public MailServiceController(IConfiguration configuration)
        {
            config = configuration;
            AppSettings = new AppSettingsModel();
            config.GetSection("AppSettings").Bind(AppSettings);
        }

        [HttpPost("[action]")]
        public string SendMail(ContactUsModel contactUs)
        {
            
            try
            {
                string htmlTemplate = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", AppSettings.MailTemplate));
                string enquiryStr = contactUs.IsEnquiry ? "There is new sales enquiry!" : "There is new support request!";
                MailMessage mailMessage = new MailMessage();
                mailMessage.To.Add(contactUs.IsEnquiry ? AppSettings.SMTPToAddressSales : AppSettings.SMTPToAddressAfterSales);
                AppSettings.SMTPCCAddresses.ForEach(s => mailMessage.CC.Add(s));
                mailMessage.From = new MailAddress(AppSettings.SMTPFromAddress);
                mailMessage.Subject = AppSettings.SMTPSubject + contactUs.FullName;
                mailMessage.Body = string.Format(htmlTemplate, enquiryStr, contactUs.FullName, contactUs.PhoneNumber, contactUs.EmailAddress, contactUs.Message);
                mailMessage.IsBodyHtml = true;
                SmtpClient smtpClient = new SmtpClient(AppSettings.SMTPServer, AppSettings.SMTPPort);
                smtpClient.Credentials = new NetworkCredential(AppSettings.SMTPUsername, AppSettings.SMTPPassword);
                smtpClient.EnableSsl = AppSettings.SMTPUseSSL;
                smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtpClient.Send(mailMessage);
                dynamic resultData = new JObject();
                resultData.StatusCode = true;
                resultData.StatusData = "Successfully sent";
                return JsonConvert.SerializeObject(resultData);
            }  
            catch (Exception ex)
            {
                dynamic resultData = new JObject();
                resultData.StatusCode = false;
                resultData.StatusData = ex.Message;
                return JsonConvert.SerializeObject(resultData);
            }
        }
    }
}
