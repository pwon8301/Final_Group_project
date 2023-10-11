# Develop Protocal
# Version
<table>
<tr>
<th>Version</th>
<th>Date</th>
<th>changed by</th>
</tr>
<tr>
<th>V.1.1011.2</th>
<th>10/11</th>
<th>JoeyWang</th>
</tr>
</table>

# Why we got this
Git hub is a really useful tool but could also be dangerous. We might waste lots of time if we can't use the github properly.What we have learnt in the class is not enough for us to github efficient. So I will put more useful details about github here <br>
Besides that,Some protocals can make our team work more high-efficiency and less mistake.So we can put all these things in this document.<br>

# Version management
We will put our version management table in readme file,The version management table will show the version of three branch<br>
```The main Branch``` is the most inpoetant branch,we won't commit any changes to this branch unless we have some realy meaningfuf progress and 100% sure that there are no bugs in touse progress<br>
```The release branch``` will storage our combined work,For example: teammate A finfshed color function on his branch,Team mateB finished circle generate functions on her branch,Then both of them commit their branch to the release Branch.Once all the member commit their changes to the release branch and finished debug, we can drag the latest release branch to do the next step develop.we will only update the release branch when everyone agree,and once we have a new release version,every one should first drag the release branch to their own develop branch then do the later works<br>
```The develop branch``` is where everyone do thir own develop work you can commit an many times as you want. the only thing you should be careful is do not change other people's develop branch<br>
```naming rules```
All the version management will be puted in readme file like  this :<br>
![Version control](Images/DPP1.png)<br>
About version naming:<br>
For main branch and release branch,we can use this format```x.x.x```This stand for First class version + Second class Version + Small update Version<br>
for documents and develop branch,We can use this format:```x..xxxx.x``` This stand for First class version + date + dateversion.<br> 




# More github
Since we will need lots of functions and each function can be written by different person,Using different branch can help us make our projet less prone to content conflicts or other hassles.So I will put the details on how to use this below

### More about Branch
you can view different branch on github by selecting here:<br>
![View branch](Images/DPP2.png)<br>
When you do your own work, you need to first change your workspace to your own branch.You can do that in VScode by selecting here<br>
![Select branch](Images/DPP3.png)<br>