using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Yewujiesuanshenqingshus.Dto
{
    [AutoMap(typeof(QC.MF.Yewujiesuanshenqingshu.Yewujiesuanshenqingshu))]
    public class CreateYewujiesuanshenqingshuDto
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public int Day { get; set; }
        public string Designation { get; set; }
        //申请人
        //名称
        public string Account { get; set; }
        //账号
        public string Telephone { get; set; }
        //联系电话
        public string Account1 { get; set; }
        //开户/汇出行
        public string Designation1 { get; set; }
        //收款人/名称
        public string Account2 { get; set; }
        //账号
        public string Provice { get; set; }
        //省
        public string City { get; set; }
        //市
        public string Account3 { get; set; }
        //开户/汇出行
        public string Currency { get; set; }
        //币种
        public decimal Money { get; set; }
        //金额
        public string Account4 { get; set; }
        //账号
        public string Pay { get; set; }
        //支付密码
        public string Nationality { get; set; }
        //国籍
        public string Type { get; set; }
        //证件类型
        public string Professional { get; set; }
        //职业
        public string Number { get; set; }
        //证件号码
        public string Extra { get; set; }
        //附加信息
    }
}
