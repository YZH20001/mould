using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouquanshus.Dto
{
    [AutoMap(typeof(Shouquanshu))]
    public class CreateShouquanshuDto
    {
        public string Zhihang { get; set; }
        public string Name { get; set; }
        public string Idcard { get; set; }
        public string Telephonenumber { get; set; }
        public string Other { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }
        public int Day { get; set; }
    }
}
