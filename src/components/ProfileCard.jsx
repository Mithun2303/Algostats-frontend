import { Card } from './ui/card';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function ProfileCard({className,userDetails}) {
  return (
    <Card className={`flex items-center justify-center min-h-80 bg-glassbg p-6 rounded-lg shadow-lg text-white border-none mt-4 ${className}`}>
      <div className="flex md:flex-row flex-col items-center space-x-4">
        <img
          src="https://wallpaperaccess.com/full/9372401.jpg" // Replace with the actual path to the image
          alt="Profile"
          className="rounded-full md:w-48 md:h-48 w-32 h-32 object-cover"
        />
        <div className='w-fit text-center overflow-hidden'>
          <span className="md:text-5xl text-3xl  font-bold truncate text-[#E89416]">{userDetails.name}</span>
          <p className="text-2xl mb-4">{userDetails.id}  |  {userDetails.stream}  |  {userDetails.batch}  |  {userDetails.role}</p>
          <div className="flex space-x-4 mt-2 justify-center">
            <a href={`https://github.com/${userDetails.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 mr-10">
              <FaGithub size={30} />
            </a>
            <a href={`https://linkedin.com/in/${userDetails.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProfileCard;
