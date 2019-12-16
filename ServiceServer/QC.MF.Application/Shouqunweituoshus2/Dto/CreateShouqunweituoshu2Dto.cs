using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouqunweituoshus2.Dto
{
    [AutoMap(typeof(QC.MF.Shouqunweituoshus2.Shouqunweituoshus2))]
    public class CreateShouqunweituoshus2Dto
    {

        ///客户填写
        //银行名称
        public string BankName { get; set; }
        //姓名
        public string Name { get; set; }
        //证件类型
        public string IdType { get; set; }
        //证件号码
        public string IdNumber { get; set; }
        //部门
        public string Department { get; set; }
        //职务
        public string Post { get; set; }
        ///电子对账
        //增加/开立
        public string Add { get; set; }
        //变更
        public string BianGeng { get; set; }
        //删除/注销
        public string ShanXiao { get; set; }
        //密码重置
        public string MiZhi { get; set; }
        //密码解锁
        public string MiJie { get; set; }
        ///自助回单卡
        //签约
        public string QianYue { get; set; }
        //解约
        public string JieYue { get; set; }
        //换卡/补卡
        public string HuanBu { get; set; }
        //新增账号
        public string ZengHao { get; set; }
        ///单位金融短信通
        //撤销
        public string CheXiao { get; set; }
        //修改
        public string XiuGai { get; set; }
        ///理财产品
        //购买
        public string GouMai { get; set; }
        //赎回
        public string ShuHui { get; set; }
        //风险评估
        public string FengGu { get; set; }
        ///结构性存款
        //到期解冻
        public string DaoDong { get; set; }
        ///单位存款证实书
        //质押换开
        public string ZhiHuan { get; set; }
        //补发
        public string BuFa { get; set; }
        //年
        public string Nian { get; set; }
        //月
        public string Yue { get; set; }
        //日
        public string Ri { get; set; }
    }
}
