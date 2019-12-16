using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouqunweituoshus1.Dto
{
    [AutoMap(typeof(QC.MF.Shouqunweituoshus1.Shouqunweituoshus1))]
    public class CreateShouqunweituoshus1Dto
    {

        ///银行填写
        //银行名称
        public string BankName { get; set; }
        //姓名
        public string Name { get; set; }
        //证件种类
        public string IdType { get; set; }
        //证件号码
        public string IdNumber { get; set; }
        //职务
        public string Post { get; set; }
        //名章
        public string Seal { get; set; }
        //联系电话
        public string Phone { get; set; }
        //并行
        public string BingXing { get; set; }
        //废止
        public string FeiZhi { get; set; }
        //年
        public string Nian { get; set; }
        //月
        public string Yue { get; set; }
        //日
        public string Ri { get; set; }
        
    }
}
