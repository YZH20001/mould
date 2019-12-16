using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Demos;
using QC.MF.Ywdlsqbiaos.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Ywdlsqbiaos
{
    public class YwdlsqbiaoAppService : AsyncMFCrudAppService<Ywdlsqbiao, GetListYwdlsqbiaoDto, PagedSortedAndFilteredInputDto, CreateYwdlsqbiaoDto, UpdateYwdlsqbiaoDto>, IYwdlsqbiaoAppService
    {
        public YwdlsqbiaoAppService(IRepository<Ywdlsqbiao,int> repository) : base(repository)
        {

        }
    }
}