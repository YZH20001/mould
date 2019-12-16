using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Xianjinjiaokuandan.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Xianjinjiaokuandan
{
  public   interface IXianjinjiaokuandanAppService:IAsyncCrudAppService<GetListXinjinjiaokuandanDto, int, PagedSortedAndFilteredInputDto, CreateXinjinjiaokuandanDto, UpdateXinjinjiaokuandanDto>
    {

    }
}
