using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Shouquanshus.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouquanshus
{
    public interface IShouquanshuAppService : IAsyncCrudAppService<GetListShouquanshuDto, int, PagedSortedAndFilteredInputDto, CreateShouquanshuDto, UpdateShouquanshuDto>
    {
    }
}
