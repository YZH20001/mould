using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Yewujiesuanshenqingshus.Dto
{
    [AutoMap(typeof(QC.MF.Yewujiesuanshenqingshu.Yewujiesuanshenqingshu))]
    public class GetYewujiesuanshenqingshuDto : GetListYewujiesuanshenqingshuDto
    {
        public GetYewujiesuanshenqingshuDto()
        {
        }
    }
}
