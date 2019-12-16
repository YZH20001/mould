using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Shouqunweituoshu2.Dto;
using QC.MF.Shouqunweituoshus2.Dto;
using QC.MF.Shouqunweituoshus2.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Shouqunweituoshu2
{
    public class Shouqunweituoshu2AppService : AsyncMFCrudAppService<Shouqunweituoshus2.Shouqunweituoshus2, GetListShouqunweituoshu2Dto, PagedSortedAndFilteredInputDto, CreateShouqunweituoshus2Dto, UpdateShouquanweituoshu2Dto>, IShouqunweituoshu2AppService
    {
        public Shouqunweituoshu2AppService(IRepository<Shouqunweituoshus2.Shouqunweituoshus2, int> repository) : base(repository)
        {
        }
    }
}

