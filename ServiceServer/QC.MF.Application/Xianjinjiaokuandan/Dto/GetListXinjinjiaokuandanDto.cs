using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace QC.MF.Xianjinjiaokuandan.Dto
{
    [AutoMap(typeof(QC.MF.Xianjinjiaokuandans.Xianjinjiaokuandan))]
    public class GetListXinjinjiaokuandanDto : CreateXinjinjiaokuandanDto, IEntityDto<int>
    {
        public int Id { get ; set ; }
    }
}
