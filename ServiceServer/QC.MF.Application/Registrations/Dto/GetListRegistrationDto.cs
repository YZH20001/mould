using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using QC.MF.Registrations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Registrations.Dto
{
    [AutoMap(typeof(Registration))]
    public class GetListRegistrationDto : CreateRegistrationDto, IEntityDto<int>
    {
        public int Id { get ; set ; }
    }
}
