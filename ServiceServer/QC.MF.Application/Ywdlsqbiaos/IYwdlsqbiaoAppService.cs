using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Ywdlsqbiaos.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Ywdlsqbiaos
{
    public interface IYwdlsqbiaoAppService : IAsyncCrudAppService<GetListYwdlsqbiaoDto, int, PagedSortedAndFilteredInputDto, CreateYwdlsqbiaoDto, UpdateYwdlsqbiaoDto>
    {
    }
}
