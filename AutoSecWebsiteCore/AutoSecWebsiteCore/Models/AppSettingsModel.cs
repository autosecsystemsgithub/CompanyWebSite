﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoSecWebsiteCore.Models
{
    public class AppSettingsModel
    {
        public string SMTPServer { get; set; }
        public int SMTPPort { get; set; }
        public string SMTPUsername { get; set; }
        public string SMTPPassword { get; set; }
        public bool SMTPUseSSL { get; set; }
        public string SMTPFromAddress { get; set; }
        public string SMTPSubject { get; set; }
        public string MailTemplate { get; set; }
        public string SMTPToAddressAfterSales { get; set; }
        public string SMTPToAddressSales { get; set; }
        public List<string> SMTPCCAddresses { get; set; }
    }
}
