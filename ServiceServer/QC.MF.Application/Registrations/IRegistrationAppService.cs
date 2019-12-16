using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Registrations.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Registrations
{
    public interface IRegistrationAppService : IAsyncCrudAppService<GetListRegistrationDto, int, PagedSortedAndFilteredInputDto, CreateRegistrationDto, UpdateRegistrationDto>
    {
    }
}
