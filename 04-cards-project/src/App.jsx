import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobs = [
    {
      img: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
      company: "Amazon",
      position: "Senior UI/UX Designer",
      workType: "Part Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "San Francisco, CA",
      listDays: 5,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
      company: "Google",
      position: "Graphic Designer",
      workType: "Full Time",
      level: "Flexible Schedule",
      salary: "$150-220k",
      location: "Mountain View, CA",
      listDays: 30,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57hcOBfCciRIoQyvIIVjImSAqCEMgnlQ6nQ&s",
      company: "Meta",
      position: "UX Designer",
      workType: "Full Time",
      level: "In Office",
      salary: "$200-250k",
      location: "New York, NY",
      listDays: 18,
    },
    {
      img: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      company: "Apple",
      position: "Graphic Designer",
      workType: "Full Time",
      level: "Flexible Schedule",
      salary: "$85-120k",
      location: "Cupertino, CA",
      listDays: 6,
    },
    {
      img: "https://pbs.twimg.com/profile_images/1921980469052375040/E9jrHsYu_400x400.png",
      company: "Airbnb",
      position: "Junior UX/UI Designer",
      workType: "Contract",
      level: "Remote",
      salary: "$100/hr",
      location: "San Francisco, CA",
      listDays: 1,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company: "Microsoft",
      position: "Product Designer",
      workType: "Full Time",
      level: "Hybrid",
      salary: "$140-190k",
      location: "Seattle, WA",
      listDays: 3,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      company: "IBM",
      position: "UI Designer",
      workType: "Part Time",
      level: "Remote",
      salary: "$90k/year",
      location: "Austin, TX",
      listDays: 12,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Adobe_Corporate_logo.svg",
      company: "Adobe",
      position: "Senior Product Designer",
      workType: "Full Time",
      level: "Senior Level",
      salary: "$160-210k",
      location: "San Jose, CA",
      listDays: 2,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      company: "Spotify",
      position: "UX Researcher",
      workType: "Contract",
      level: "Remote",
      salary: "$110/hr",
      location: "Stockholm, Sweden",
      listDays: 7,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      company: "Salesforce",
      position: "Visual Designer",
      workType: "Full Time",
      level: "Hybrid",
      salary: "$130-180k",
      location: "Chicago, IL",
      listDays: 4,
    },
  ]

  return (
    <div className="parent">
  {jobs.map((job, index) => {
    return (
      <div key={index}>
        <Card
          img={job.img}
          company={job.company}
          position={job.position}
          workType={job.workType}
          level={job.level}
          salary={job.salary}
          location={job.location}
          listDays={job.listDays}
        />
      </div>
    );
  })}
</div>
  )
}

export default App