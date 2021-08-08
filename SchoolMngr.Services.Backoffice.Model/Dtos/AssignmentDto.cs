﻿
namespace SchoolMngr.Services.Model.Dtos
{
    using Codeit.NetStdLibrary.Base.Abstractions.DomainModel;
    using System;

    public sealed class AssignmentDto : IDto
    {
        public Guid Id { get; set; }
        public DateTime From { get; set; }
        public DateTime? To { get; set; }

        public ClassDto Class { get; set; }
        public TeacherDto Teacher { get; set; }
    }
}
