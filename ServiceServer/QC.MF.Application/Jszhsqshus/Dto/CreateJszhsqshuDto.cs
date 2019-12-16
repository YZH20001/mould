using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Jszhsqshus.Dto
{
    [AutoMap(typeof(Jszhsqshu))]
    public class CreateJszhsqshuDto
    {
        //账户名称
        public string Accounttitle { get; set; }
        //开户银行名称
        public string Bankname { get; set; }
        //开户银行代码
        public string Bankcode { get; set; }
        //账号
        public string Account { get; set; }
        //账户性质
        public string Naturezccount { get; set; }
        //基本
        public string Basic { get; set; }
        //专用
        public string Special { get; set; }
        //一般
        public string General { get; set; }
        //临时
        public string Temporary { get; set; }
        //个人
        public string Personal { get; set; }
        //开户许可证核准号
        public string Accountnumber { get; set; }
        //销户原因
        public string Pinreasons { get; set; }
        //交回空白重要凭证
        public string Voucher { get; set; }
        //种类
        public string Species { get; set; }
        //张（份）数
        public string Anumberof { get; set; }
        //起讫号码
        public string Allnumbers { get; set; }
        //填写说明
        public string Fillingexplanation { get; set; }
        //年
        public int Year { get; set; }
        //月
        public int Month { get; set; }
        //日
        public int Day { get; set; }
        //年
        public int Year1 { get; set; }
        //月
        public int Month1 { get; set; }
        //日
        public int Day1 { get; set; }
    }
}
