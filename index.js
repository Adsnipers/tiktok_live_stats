// ########################
// Tracker options
// ########################
const trackVideo = false;
const trackProfile = true;
const profileName = '@Adsnipers';
const videoID = '6892220263971179777'


const tiktok = require('tiktok-app-api');
const chalk = require('chalk');

let tiktokApp;
async function waitForTiktok() {
  tiktokApp = await tiktok();
}

console.log(chalk.bgRed(`Make sure you have uncommented only one tracking feature, you can locate them at the bottom of the script, if none are uncommented this script wont work`))

async function getUserInfo() {
  console.clear()
  console.log(chalk.inverse(`TikTok Live Updating Stats by Adsnipers`))
  console.log(chalk.inverse(`Tracking ${profileName}`))
  const user = await tiktokApp.getUserByName(profileName); // Put your username here
  const userInfo = await tiktokApp.getUserInfo(user);
  console.log(chalk.bggreen(`Followers: ${userInfo.followerCount}`)) // Displays user follower count in green
  console.log(chalk.bgGreen(`Likes: ${userInfo.likeCount}`)) // Displays user follower count in cyan
}

async function getVideoInfo() {
  console.clear()
  console.log(chalk.inverse(`TikTok Live Updating Stats by Adsnipers`))
  const video = tiktokApp.getVideo(videoID);
  const videoInfo = await tiktokApp.getVideoInfo(video);
  console.log(chalk.bgCyan(videoInfo.description))
  console.log(chalk.bgCyan(`Views: ${videoInfo.playCount}`))
  console.log(chalk.bgCyan(`Likes: ${videoInfo.likeCount}`))
  console.log(chalk.bgCyan(`Comments: ${videoInfo.commentCount}`))
  console.log(chalk.bgCyan(`Shares: ${videoInfo.shareCount}`))
}

function run() {
  waitForTiktok().catch(error => console.log(chalk.bgRed(error)))
  if (trackProfile == true) {
    getUserInfo().catch(error => console.log(chalk.bgRed(`Please Wait`)))
  }
  if (trackVideo == true) {
    getVideoInfo().catch(error => console.log(chalk.bgRed('Please Wait')))
  }
  setTimeout(run, 50000)
}
run()