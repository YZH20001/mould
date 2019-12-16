using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Shenqingshu.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shenqingshu
{
    public interface IShenqingshuAppService : IAsyncCrudAppService<GetListShenqingshuDto, int, PagedSortedAndFilteredInputDto, CreateShenqingshuDto, UpdateShenqingshuDto>
    {

    }
}
