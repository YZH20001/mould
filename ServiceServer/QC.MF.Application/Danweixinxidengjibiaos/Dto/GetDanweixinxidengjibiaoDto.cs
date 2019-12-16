using Abp.AutoMapper;
using QC.MF.danweixinxidengjibiao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Danweixinxidengjibiaos.Dto
{
    [AutoMap(typeof(Danweixinxidengjibiao))]
    public class GetDanweixinxidengjibiaoDto : GetListDanweixinxidengjibiaoDto
    {
        public GetDanweixinxidengjibiaoDto()
        {
        }
    }
}
