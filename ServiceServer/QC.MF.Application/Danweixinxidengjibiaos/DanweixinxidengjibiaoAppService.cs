using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.danweixinxidengjibiao;
using QC.MF.Danweixinxidengjibiaos.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Danweixinxidengjibiaos
{
    public class DanweixinxidengjibiaoAppService : AsyncMFCrudAppService<Danweixinxidengjibiao, GetListDanweixinxidengjibiaoDto, PagedSortedAndFilteredInputDto, CreateDanweixinxidengjibiaoDto, UpdateDanweixinxidengjibiaoDto>, IDanweixinxidengjibiaoAppService
    {
        public DanweixinxidengjibiaoAppService(IRepository<Danweixinxidengjibiao, int> repository) : base(repository)
        {
        }
    }
}
