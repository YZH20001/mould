using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.KailiApplyBooks
{
    /// <summary>
    /// 开立单位银行结算账号申请书
    /// </summary>
   public  class KailiApplyBook: FullAuditedEntity
    {
        /// <summary>
        /// 存款人名称
        /// </summary>
        public  string Sname { get; set; }
        /// <summary>
        /// 电话
        /// </summary>
        public string PhoneNumber { get; set; }
        /// <summary>
        /// 地址
        /// </summary>
        public string Address { get; set; }
        /// <summary>
        /// 邮编
        /// </summary>
        public string PostCode { get; set; }
        /// <summary>
        /// 存款人类别
        /// </summary>
        public string DepositorsType { get; set; }
        /// <summary>
        /// 组织机构代码
        /// </summary>
        public string Organization { get; set; }
        /// <summary>
        /// 法定代表人和单位负责人
        /// </summary>
        public string FadingAndDanwei { get; set; }
        /// <summary>
        /// 姓名
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 证件类型
        /// </summary>
        public string PaperType { get; set; }
        /// <summary>
        /// 证件号码
        /// </summary>
        public string PaperNumber { get; set; }
        /// <summary>
        /// 行业分类
        /// </summary>
        public string Industry { get; set; }
        /// <summary>
        /// 注册资金
        /// </summary>
        public string Zijin { get; set; }
        /// <summary>
        /// 地区代码
        /// </summary>
        public string AddressDaima { get; set; }
        /// <summary>
        /// 经营范围
        /// </summary>
        public string Business { get; set; }
        /// <summary>
        /// 证明文件种类
        /// </summary>
        public string PaperWenjian { get; set; }
        /// <summary>
        /// 证明文件编号
        /// </summary>
        public string PaperBianhao { get; set; }
        /// <summary>
        /// 税务登记证
        /// </summary>
        public string Tax { get; set; }
        /// <summary>
        /// 账户性质
        /// </summary>
        public string ZhangHuNature { get; set; }
        /// <summary>
        /// 资金性质
        /// </summary>
        public string ZiJiNature { get; set; }
        /// <summary>
        /// 有效日期
        /// </summary>
        public int Year { get; set; }
        public int Moth { get; set; }
        public int Day { get; set; }
        /*
         主管单位信息
         */
        /// <summary>
        /// 主管名称
        /// </summary>
        public string DirectorName { get; set; }
        /// <summary>
        /// 基本存款账户开户
        /// </summary>
        public string CunkuanZhangHu { get; set; }
        /// <summary>
        /// 组织机构代码
        /// </summary>
        public string ZuZhiJiGou{ get; set; }
        /// <summary>
        /// 法定代表人和单位负责人
        /// </summary>
        public string FadingDaiBiao { get; set; }
        /// <summary>
        /// 姓名
        /// </summary>
        public string FadingDaiBiaoName { get; set; }
        /// <summary>
        /// 证件种类
        /// </summary>
        public string FadingDaiBiaoType { get; set; }
        /// <summary>
        /// 证件号码
        /// </summary>
        public string FadingDaiBiaoNumber { get; set; }
    }
}
