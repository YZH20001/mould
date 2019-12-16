using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Shouqunweituoshu1.Dto;
using QC.MF.Shouqunweituoshus1.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouqunweituoshu1
{
    public interface IShouqunweituoshu1AppService : IAsyncCrudAppService<GetListShouqunweituoshu1Dto, int, PagedSortedAndFilteredInputDto, CreateShouqunweituoshus1Dto, UpdateShouquanweituoshu1Dto>
    {

    }
}
