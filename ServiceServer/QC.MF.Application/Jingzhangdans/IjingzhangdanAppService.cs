using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Demos.Dto;
using QC.MF.Jingzhangdans.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Jingzhangdans
{
    public interface IJingzhangdanAppService:IAsyncCrudAppService<GetListJiangzhangdanDto, int, PagedSortedAndFilteredInputDto, CreateJingzhangdanDto, UpdateJiangzhangdanDto>
    {
    }
}
