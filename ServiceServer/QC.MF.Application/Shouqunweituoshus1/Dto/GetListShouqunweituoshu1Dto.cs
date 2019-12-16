using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using QC.MF.Shouqunweituoshus1.Dto;

namespace QC.MF.Shouqunweituoshu1.Dto
{
    [AutoMap(typeof(QC.MF.Shouqunweituoshus1.Shouqunweituoshus1))]
    public class GetListShouqunweituoshu1Dto : CreateShouqunweituoshus1Dto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
