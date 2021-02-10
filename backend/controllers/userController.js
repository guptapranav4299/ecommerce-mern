import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @ descr Auth user & get token
// @ route POST /api/users/login
// @ acess Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    const user = await User.findOne({ email })
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  })


  // @ Register a new user
// @ route POST /api/users
// @ acess Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else{
    res.status(400)
    throw new Error('Invalid user data')
  }
})
  
// @ descr Get User profile
// @ route GET /api/users/login
// @ acess Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  })
  if(user){

  }else{
    res.status(404)
    throw new Error('User not found')
  }})

  // @ descr Update User profile
// @ route PUT /api/users/profile
// @ acess Private
  const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email 
      if(req.body.password){
        user.password = req.body.password
      } 

      const updatedUser = await user.save()

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id)
      })

    }else{
      res.status(404)
      throw new Error('User not found')
    }})


    // @ descr Get all users
// @ route GET /api/users
// @ acess Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})


// @ descr Delete users
// @ route GET /api/users/:id
// @ acess Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if(user){
    await user.remove()
    res.json({message : 'User removed'})
  }else{
    res.status(404)
    throw new Error('User not found')
  }
  }) 
export { authUser,
          getUserProfile,
          registerUser,
          updateUserProfile,
          getUsers,
          deleteUser
 }