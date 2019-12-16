using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Shouqunweituoshu2.Dto;
using QC.MF.Shouqunweituoshus2.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouqunweituoshu2
{
    public interface IShouqunweituoshu2AppService : IAsyncCrudAppService<GetListShouqunweituoshu2Dto, int, PagedSortedAndFilteredInputDto, CreateShouqunweituoshus2Dto, UpdateShouquanweituoshu2Dto>
    {

    }
}
