using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Registrations.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Registrations
{
    public class RegistrationAppService : AsyncMFCrudAppService<Registration, GetListRegistrationDto, PagedSortedAndFilteredInputDto, CreateRegistrationDto, UpdateRegistrationDto>, IRegistrationAppService
    {


        public RegistrationAppService(IRepository<Registration, int> repository) : base(repository)
        {

        }
    }
}
