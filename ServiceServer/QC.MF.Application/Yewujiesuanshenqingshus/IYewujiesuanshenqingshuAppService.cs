using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Yewujiesuanshenqingshus.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Yewujiesuanshenqingshus
{
    public interface IYewujiesuanshenqingshuAppService : IAsyncCrudAppService<GetListYewujiesuanshenqingshuDto, int, PagedSortedAndFilteredInputDto, CreateYewujiesuanshenqingshuDto, UpdateYewujiesuanshenqingshuDto>
    {
    }
}
