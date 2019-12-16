using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;

namespace QC.MF.Configuration.Dto
{
    [Tab("用户打印数据设置", 4)]
    public class PrintDataSettingDto : ISettingDto
    {

        [Title("定时清理数据设置")]
        [DisplayName("小时")]
        [Key(AppSettingNames.PrintData.Hours)]
        public string Hours { get; set; }

        [DisplayName("分钟")]
        [Key(AppSettingNames.PrintData.Minutes)]
        public string Minutes { get; set; }
    }
}
