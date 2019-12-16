using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Bgyhjszhsqss.Dto
{
    [AutoMap(typeof(Bgyhjszhsqs))]
    public class CreateBgyhjszhsqsDto
    {
        //账户名称
        public string Customername { get; set; }
        //开户银行代码
        public string Bankcode { get; set; }
        //账号
        public string Accountnumber { get; set; }
        //账户性质
        public string Natureofaccount { get; set; }
        //开户许可证核准号
        public string Accountopennumber { get; set; }
        //变更事项及变更后内容如下:
        public string Changesas { get; set; }
        //账户名称
        public string Customername1 { get; set; }
        //地址
        public string Address { get; set; }
        //邮政编码
        public string Postalcode { get; set; }
        //电话
        public string Phonenumber { get; set; }
        //注册资金金额
        public string Registered { get; set; }
        //证明文件种类
        public string Typeof { get; set; }
        //证明文件编号
        public string Documentnumber { get; set; }
        //经营范围
        public string Businessscope { get; set; }
        //法定代表人或单位负责人
        public string Legal { get; set; }
        //姓名
        public string Name { get; set; }
        //证件种类
        public string Typedocument { get; set; }
        //证件号码
        public string Idnumber { get; set; }
        //关联企业
        public string Affiliated { get; set; }
        //变更后的关联企业信息填列在“关联企业登记表”中
        public string Dengjibiao { get; set; }
        //上级法人或主管单位的基本存款账户核准号
        public string Thesuperior { get; set; }
        //上级法人或主管单位的名称
        public string Thename { get; set; }
        //上级法人或主管单位法定代表人或单位负责人
        public string Headofunit { get; set; }
        //姓名
        public string Name1 { get; set; }
        //证件种类
        public string Typedocument1 { get; set; }
        //证件号码
        public string Idnumber1 { get; set; }
    }
}
