const router = require('express').Router();

router.post('/createJob', (req, res) => {

  console.log(req.body);
  //do smthning

  return res.status(200).json({
    code: 200,
    message: 'Success',
    data: {
      jobId : 'testJobId'
    }
  });
});

router.post('/processVideo', (req, res) => {

  console.log(req.body);
  //checksum
  //do smthning

  return res.status(200).json({
    code: 200,
    message: 'Success'
  });
});

router.post('/checkJobsStatus', (req, res) => {

  console.log(req.body);
  //do smthning

  return res.status(200).json({
    code: 200,
    message: 'Success',
    data: {
      jobs: [{
        jobId     : 'testJobId1',
        jobStatus : 'testStatus1'
      },
      {
        jobId     : 'testJobId2',
        jobStatus : 'testStatus2'
      }]
    }
  });
});

module.exports = router;
