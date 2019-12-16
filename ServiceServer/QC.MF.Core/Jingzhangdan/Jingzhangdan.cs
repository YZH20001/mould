using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Jingzhangdan
{
    public class Jingzhangdan : FullAuditedEntity
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public int Day { get; set; }
        public string Chupiaorenqc { get; set; }
        public string Chupiaorenzh { get; set; }
        public string Chupiaorenkhyh { get; set; }
        public string Shoukuanrenqc { get; set; }
        public string Shoukuanrenzh { get; set; }
        public string Shoukuanrenkhyh { get; set; }
        public decimal Renminbi { get; set; }
        public string Piaojuzhonglei { get; set; }
        public int Piaojuzhangshu { get; set; }
        public int Piaojuhaoma { get; set; }
    }
}
