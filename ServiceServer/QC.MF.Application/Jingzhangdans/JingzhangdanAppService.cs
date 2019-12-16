using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Demos.Dto;
using QC.MF.Jingzhangdan;
using QC.MF.Jingzhangdans.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Jingzhangdans
{
    public class JingzhangdanAppService
        : AsyncMFCrudAppService<Jingzhangdan.Jingzhangdan, GetListJiangzhangdanDto, PagedSortedAndFilteredInputDto, CreateJingzhangdanDto, UpdateJiangzhangdanDto>, IJingzhangdanAppService
    {
        public JingzhangdanAppService(IRepository<Jingzhangdan.Jingzhangdan, int> repository) : base(repository)
        {
        }
    }
}
