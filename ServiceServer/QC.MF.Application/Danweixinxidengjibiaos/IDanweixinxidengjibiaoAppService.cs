using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Danweixinxidengjibiaos.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Danweixinxidengjibiaos
{
    public interface IDanweixinxidengjibiaoAppService : IAsyncCrudAppService<GetListDanweixinxidengjibiaoDto, int, PagedSortedAndFilteredInputDto, CreateDanweixinxidengjibiaoDto, UpdateDanweixinxidengjibiaoDto>
    {
    }
}
