using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoSecWebsiteCore.Models
{
    public class ContactUsModel
    {
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string Message { get; set; }
        public bool IsEnquiry { get; set; }

    }
}
