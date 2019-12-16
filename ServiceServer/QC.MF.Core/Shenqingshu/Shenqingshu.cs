using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities;

namespace QC.MF.Shenqingshu
{
    public class Shenqingshu : Entity<int>
    {
        //户名
        public string AccountName { get; set; }
        //账号
        public string AccountNumber { get; set; }
        //币种及金额（大写）
        public string Money { get; set; }
        ///定期/通知存款业务
        //提前支取,转入单位/内部账号
        public string Account { get; set; }
        //支取日
        public string WithdrawalDate { get; set; }
        //取消取款通知原通知编号
        public string Number { get; set; }
        ///证实书/存单业务
        //凭证号码
        public string VoucherNumber { get; set; }
        //网银流水号
        public string Liushuihao { get; set; }
        ///票据业务
        //票据种类
        public string Zhonglei { get; set; }
        //票据号码
        public string Haoma { get; set; }
        //金额
        public string Jianer { get; set; }
        //收款人名称
        public string Shoukuanren { get; set; }
        //出票日期
        public string Chupiaoriqi { get; set; }
        //票据到期日
        public string Daoqiri { get; set; }
        //票据丧失时间
        public string Sangshishijian { get; set; }
        //地点
        public string Didian { get; set; }
        //原因
        public string Yuanyin { get; set; }
        ///资信业务
        //截止日期
        public string Jiezhiriqi { get; set; }
        //说明
        public string Shuoming { get; set; }
        ///预留印鉴业务
        //变更原因
        public string Biangengyuanyin { get; set; }
        //主账号
        public string Zhuzhanghao { get; set; }
        //原主账号
        public string Yuanzhanghao { get; set; }
        
        //新主账号
        public string Xinzhanghao { get; set; }
    }
}

