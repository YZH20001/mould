using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Xianjinjiaokuandan.Dto
{
    [AutoMap(typeof(XianjinjiaokuandanAppService))]
    public class CreateXianjinjiaokuandanDto
    {
        public int Year { get; set; }
        public int Mouth { get; set; }
        public int Day { get; set; }
        public string Shoukuandanwei { get; set; }
        public string Kaihuhang { get; set; }
        public int Shoukuanzhanghao { get; set; }
        public string Zhaiyao { get; set; }
        public decimal Bizhongjijine { get; set; }
        public string Yinhangzhuanyonglan { get; set; }

    }
}
