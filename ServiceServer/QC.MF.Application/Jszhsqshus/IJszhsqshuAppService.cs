using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Jszhsqshus.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Jszhsqshus
{
    public interface IJszhsqshuAppService : IAsyncCrudAppService<GetListJszhsqshuDto, int, PagedSortedAndFilteredInputDto, CreateJszhsqshuDto, UpdataJszhsqshuDto>
    {
    }
}
