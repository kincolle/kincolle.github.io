(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{709:function(e,s,n){"use strict";n.r(s);var t=n(0),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[e._v("In the traditional function of JDBC, we need to write a complex SQL by ourself. To slove those problems, we can use Dynamic SQL of mybatis like if, choose, when, otherwise, trim, where, set, foreach.")]),e._v(" "),n("h2",{attrs:{id:"if"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[e._v("#")]),e._v(" if")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<select id="selectUserByUsernameAndSex" resultType="user" parameterType="kincolle.User">\n\tselect * from user where username=#{username} and sex=#{sex}\n</select>\n')])])]),n("p",[e._v("In the example if  #{username} is  null then result will be null. To solve this problem we use if.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<select id="selectUserByUsernameAndSex" resultType="user" parameterType="kincolle.User">\n    select * from user where\n        <if test="username != null">\n           username=#{username}\n        </if>\n         \n        <if test="username != null">\n           and sex=#{sex}\n        </if>\n</select> \n')])])]),n("p",[e._v('Then we can see if sex is null then the SQL will be "select * from user where username=#{username}". But if username is null the SQL will be "select * from user where and sex=#{sex}". definitely it\'s wrong. to Solve this problem we can use where.')]),e._v(" "),n("h2",{attrs:{id:"if-where"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if-where"}},[e._v("#")]),e._v(" if+where")]),e._v(" "),n("p",[e._v("To solve the problem in the example of if, we use where.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<select id="selectUserByUsernameAndSex" resultType="user" parameterType="kincolle.User">\n    select * from user\n    <where>\n        <if test="username != null">\n           username=#{username}\n        </if>\n         \n        <if test="username != null">\n           and sex=#{sex}\n        </if>\n    </where>\n</select>\n')])])]),n("p",[e._v('If we use where and if "AND" or "OR" is in head it will be deleted.')]),e._v(" "),n("h2",{attrs:{id:"if-set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if-set"}},[e._v("#")]),e._v(" if+set")]),e._v(" "),n("p",[e._v("If we have a set, then we can do like the following.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<update id="updateUserById" parameterType="kincolle.User">\n    update user u\n        <set>\n            <if test="username != null and username != \'\'">\n                u.username = #{username},\n            </if>\n            <if test="sex != null and sex != \'\'">\n                u.sex = #{sex}\n            </if>\n        </set>\n     \n     where id=#{id}\n</update>\n')])])]),n("p",[e._v('If username is null then the SQL will be "update user u set u.sex=? where id=?". If not, the SQl will be "update user u set u.username = ? ,u.sex = ? where id=?".')]),e._v(" "),n("h2",{attrs:{id:"choose-when-otherwise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#choose-when-otherwise"}},[e._v("#")]),e._v(" choose(when,otherwise)")]),e._v(" "),n("p",[e._v("Sometimes, we do not want to use all conditions but just one of them then we can use choose:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<select id="selectUserByChoose" resultType="kincolle.User" parameterType="kincolle.User">\n  select * from user\n  <where>\n      <choose>\n          <when test="id !=\'\' and id != null">\n              id=#{id}\n          </when>\n          <when test="username !=\'\' and username != null">\n              and username=#{username}\n          </when>\n          <otherwise>\n              and sex=#{sex}\n          </otherwise>\n      </choose>\n  </where>\n</select>  \n')])])]),n("p",[e._v('If id is not null then the SQL is "select * from user where  id=?". If id is null and username is not null then the SQL is "select * from user where  username=?". If both id and username is null then the SQL is "select * from user where sex=?".')]),e._v(" "),n("h2",{attrs:{id:"trim"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#trim"}},[e._v("#")]),e._v(" trim")]),e._v(" "),n("p",[e._v("The trim is a format label, it can do function of set or where.")]),e._v(" "),n("h5",{attrs:{id:"_1-if-where"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-if-where"}},[e._v("#")]),e._v(" 1. if+where")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<select id="selectUserByUsernameAndSex" resultType="user" parameterType="kincolle.User">\n    select * from user\n    \x3c!-- <where>\n        <if test="username != null">\n           username=#{username}\n        </if>\n         \n        <if test="username != null">\n           and sex=#{sex}\n        </if>\n    </where>  --\x3e\n    <trim prefix="where" prefixOverrides="and | or">\n        <if test="username != null">\n           and username=#{username}\n        </if>\n        <if test="sex != null">\n           and sex=#{sex}\n        </if>\n    </trim>\n</select>\n')])])]),n("h5",{attrs:{id:"_2-if-set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-if-set"}},[e._v("#")]),e._v(" 2. if+set")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<update id="updateUserById" parameterType="kincolle.User">\n    update user u\n        \x3c!-- <set>\n            <if test="username != null and username != \'\'">\n                u.username = #{username},\n            </if>\n            <if test="sex != null and sex != \'\'">\n                u.sex = #{sex}\n            </if>\n        </set> --\x3e\n        <trim prefix="set" suffixOverrides=",">\n            <if test="username != null and username != \'\'">\n                u.username = #{username},\n            </if>\n            <if test="sex != null and sex != \'\'">\n                u.sex = #{sex},\n            </if>\n        </trim>\n     \n     where id=#{id}\n</update>\n')])])]),n("h2",{attrs:{id:"foreach"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[e._v("#")]),e._v(" foreach")]),e._v(" "),n("p",[e._v('If in user table we can 3 users that 1, 2 and 3. We can use SQL like "select * from user where id=1 or id=2 or id=3" or "select * from user where id in (1,2,3)".')]),e._v(" "),n("p",[e._v('(1)  build a UserVo class which has "List'),n("Integer",[e._v(' ids"')])],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("package kincolle.vo;\n\nimport java.util.List;\n\npublic class UserVo {\n\n    private List<Integer> ids;\n \n    public List<Integer> getIds() {\n        return ids;\n    }\n \n    public void setIds(List<Integer> ids) {\n        this.ids = ids;\n    }\t \n}　\n")])])]),n("p",[e._v("(2) use foreach")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<select id="selectUserByListId" parameterType="com.ys.vo.UserVo" resultType="kincolle.User">\n    select * from user\n    <where>\n        <foreach collection="ids" item="id" open="and (" close=")" separator="or">\n            id=#{id}\n        </foreach>\n    </where>\n</select>\n')])])]),n("p",[e._v("then do the test:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('@Test\npublic void testSelectUserByListId(){\n    String statement = "kincolle.userMapper.selectUserByListId";\n    UserVo uv = new UserVo();\n    List<Integer> ids = new ArrayList<>();\n    ids.add(1);\n    ids.add(2);\n    ids.add(3);\n    uv.setIds(ids);\n    List<User> listUser = session.selectList(statement, uv);\n    for(User u : listUser){\n        System.out.println(u);\n    }\n    session.close();\n}')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);