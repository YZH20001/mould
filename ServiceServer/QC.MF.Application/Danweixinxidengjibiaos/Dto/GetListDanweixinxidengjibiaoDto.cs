using Abp.Application.Services.Dto;
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
    public class GetListDanweixinxidengjibiaoDto : CreateDanweixinxidengjibiaoDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
