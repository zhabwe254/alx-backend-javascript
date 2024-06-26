import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, filename) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(filename);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.value || result.reason,
    })));
}

export default handleProfileSignup;
