using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Registrations.Dto
{
        [AutoMap(typeof(Registration))]
        public class GetRegistrationDto : GetListRegistrationDto
    {
        }
}
