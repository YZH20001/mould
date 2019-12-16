using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Powerbooks.Dto
{
    [AutoMap(typeof(Powerbook))]
    public class CreatePowerbookDto
    {
        ///
        //客户名称
        public string Sname { set; get; }
        /// <summary>
        /// 法定代表人信息
        /// </summary>
        //姓名
        public string Name_1 { set; get; }
        //证件类型
        public string Type_1 { set; get; }
        //证件号码
        public string Number_1 { set; get; }
        //联系电话
        public string PhoneNumber_1 { set; get; }

        ///办理人信息
        ///
         //姓名
        public string Name_2 { set; get; }
        //证件类型
        public string Type_2 { set; get; }
        //证件号码
        public string Number_2 { set; get; }
        //联系电话
        public string PhoneNumber_2 { set; get; }
    }
}
