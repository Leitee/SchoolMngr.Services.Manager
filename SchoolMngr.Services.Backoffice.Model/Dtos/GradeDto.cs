﻿
namespace SchoolMngr.Services.Model.Dtos
{
    using Codeit.NetStdLibrary.Base.Abstractions.DomainModel;
    using System.Collections.Generic;

    public sealed class GradeDto : IDto<int>
    {
        public GradeDto()
        {
            Subjects = new List<SubjectDto>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<SubjectDto> Subjects { get; set; }
    }
}
