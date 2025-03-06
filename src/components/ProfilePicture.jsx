function ProfilePicture({ imageUrl }) {
    return (
        <div>
            <img 
                src={imageUrl || "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg"} 
                alt="Profile" 
                className="rounded-circle border" 
            />
        </div>
    );
}

export default ProfilePicture;
