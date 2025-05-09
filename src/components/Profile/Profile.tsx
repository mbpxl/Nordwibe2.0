const Profile = () => {
  return (
    <main>
      <div className="max-w-[50rem] p-5">
        <div className="relative h-[8.875rem] bg-[#7940CF] rounded-[1.25rem]">
          ЭТО ФОН
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-1">
            <div className="border-r pr-1">
              <div className="">06.06.2004</div>
              <div className="">День Рождения</div>
            </div>
            <div>
              <div className="">Караганда</div>
              <div className="">Родной город</div>
            </div>
          </div>
          <div>
            <div>avatar</div>
            <div>Егор</div>
            <div>@mr_pipiska</div>
          </div>
          <div>
            <div>
              <div className="">Деньги, тёлки, тачки</div>
              <div className="">Цель</div>
            </div>
            <div>
              <div className="">1 млн</div>
              <div className="">Бюджет</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
