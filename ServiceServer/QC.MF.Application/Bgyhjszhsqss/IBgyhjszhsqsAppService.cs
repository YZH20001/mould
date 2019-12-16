using Abp.Application.Services;
using QC.MF.Bgyhjszhsqss.Dto;
using QC.MF.CommonDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Bgyhjszhsqss
{
  public  interface IBgyhjszhsqsAppService : IAsyncCrudAppService<GetListBgyhjszhsqsDto, int, PagedSortedAndFilteredInputDto, CreateBgyhjszhsqsDto, UpdataBgyhjszhsqsDto>
    {
    }
}
