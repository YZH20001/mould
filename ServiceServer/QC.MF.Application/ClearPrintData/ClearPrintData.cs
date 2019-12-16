using Abp.Configuration;
using QC.MF.Configuration;
using QC.MF.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.ClearPrintData
{
    public class ClearPrintData : MFAppServiceBase
    {
        public ISettingManager SettingManager { get; set; }

        public ClearPrintData(ISettingManager settingManager)
        {
            SettingManager = settingManager;
        }

        public static DateTime? LastTime { get; set; }
        public void Run()
        {
            try
            {

                int hours, minutes;

                int.TryParse(SettingManager.GetSettingValue(AppSettingNames.PrintData.Hours) ?? "", out hours);
                int.TryParse(SettingManager.GetSettingValue(AppSettingNames.PrintData.Minutes) ?? "", out minutes);
                var total = hours + minutes;
                if (!LastTime.HasValue)
                {
                    LastTime = DateTime.Now;
                }
                if (total>0 && LastTime.Value.AddMinutes(total) < DateTime.Now)
                {
                    var context = new MFDbContext();
                    context.Database.ExecuteSqlCommand("DELETE FROM Bgyhjszhsqs;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Danweixinxidengjibiaos;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Jingzhangdans;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Jszhsqshus;");
                    context.Database.ExecuteSqlCommand("DELETE FROM KailiApplyBooks;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Powerbooks;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Registrations;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Shenqingshus;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Shouquanshus;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Shouqunweituoshus1;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Shouqunweituoshus2;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Xianjinjiaokuandans;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Yewujiesuanshenqingshus;");
                    context.Database.ExecuteSqlCommand("DELETE FROM Ywdlsqbiaos;");
                    LastTime = DateTime.Now;
                }
            }
            finally
            { 
            
            }
        }

    }
}
