using Abp.AutoMapper;
using QC.MF.Demos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Ywdlsqbiaos.Dto
{
    [AutoMap(typeof(Ywdlsqbiao))]
    public class CreateYwdlsqbiaoDto
    {
        //客户名称
        public string Customername { get; set; }
        //姓名
        public string Name { get; set; }
        //证件类型
        public string Certificatetype { get; set; }
        //证件号码
        public string Idnumber { get; set; }
        //联系电话
        public string Contactnumber { get; set; }
        //姓名
        public string Name2 { get; set; }
        //证件类型
        public string Certificatetype2 { get; set; }
        //证件号码
        public string Idnumber2 { get; set; }
        //联系电话
        public string Contactnumber2 { get; set; }
        //姓名
        public string Name1 { get; set; }
        //证件类型
        public string Certificatetype1 { get; set; }
        //证件号码
        public string Idnumber1 { get; set; }
        //联系电话
        public string Contactnumber1 { get; set; }
    }
}
