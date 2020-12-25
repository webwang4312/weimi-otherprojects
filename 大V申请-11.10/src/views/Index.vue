<template>
  <div class="index" ref="imageWrapper">
    <div class="headertop">
      <select @click="jiantouRotate2" ref="optionvalue2" @change="valueSelect2">
        <option selected disabled style="display: none;">{{
          $t("select[13]")
        }}</option>
        <option v-for="item in lanoptions" :key="item.value">{{
          item.label
        }}</option>
      </select>
      <img
        src="../assets/images/index/组 224.png"
        :class="{ jiantou: jiantou2 }"
      />
      <!-- <button @click="language" id="language">中/En</button> -->
    </div>
    <div class="select">
      <select @click="jiantouRotate" ref="optionvalue" @change="valueSelect">
        <option selected disabled style="display: none;">{{
          $t("select[1]")
        }}</option>
        <option v-for="item in options" :key="item.value">{{
          item.label
        }}</option>
      </select>
      <img
        src="../assets/images/index/组 224.png"
        :class="{ jiantou: jiantou }"
      />
    </div>
    <div class="lianjie">
      <label :class="{ movename: showlianjie }">{{ $t("select[2]") }}</label>
      <input
        type="text"
        v-model="lianjie"
        @focus="fshowlianjie"
        @blur="fshowlianjieb"
      />
      <p class="lianjietil" v-if="showlianjie">{{ $t("select[3]") }}</p>
    </div>
    <div class="detail">
      <label :class="{ movename: showdetail }">{{ $t("select[4]") }}</label>
      <textarea
        rows="3"
        cols="20"
        v-model="detail"
        @focus="fshowdetail"
        @blur="fshowdetailb"
      ></textarea>
    </div>
    <!-- <input type="file" value="" id="file" @change="onUpload" /> -->
    <div class="fujian">
      <div class="fujiantop">
        <div class="line"></div>
        <p>{{ $t("select[5]") }}</p>
      </div>
      <div class="fujiancontent">{{ $t("select[6]") }}</div>
      <el-upload
        action="url"
        name="haha"
        list-type="picture-card"
        :on-remove="handleRemove"
        :http-request="uploadFile"
        :show-file-list="showlist"
        :limit="3"
        ref="icon"
        class="upload-demo"
        :class="{ disabled: uploadDisabled }"
        :before-upload="beforeUpload"
        :on-exceed="exceed"
        :on-change="handleChange"
        :on-preview="handlePreview"
        :before-remove="BeforeRemove"
        :on-success="onprogress"
        :accept="'image/*'"
        capture="camera"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </div>
    <div class="name">
      <label :class="{ movename: showname }">{{ $t("select[7]") }}</label>
      <input
        type="text"
        v-model="name"
        @focus="fshowname"
        @blur="fshownameb"
        :disabled="yanzheng"
      />
    </div>
    <div class="tel">
      <label :class="{ movename: showtel }" id="phone">{{
        $t("select[8]")
      }}</label>
      <input type="text" v-model="tel" disabled />
    </div>
    <div class="qq">
      <label :class="{ movename: showqq }" ref="qq">{{
        $t("select[9]")
      }}</label>
      <input type="text" v-model="qq" @focus="fshowqq" @blur="fshowqqb" />
    </div>
    <div class="checkbox" >
      <input type="checkbox" :checked='ifchecked' ref="checked" />
      <span v-if="selectlanguage">
        {{ $t("select[10]") }}
        <Button type="primary" @click="modal1 = true"
          id="language"> {{ $t("select[14]") }}</Button
        >
        <Modal
          v-model="modal1"
          ok-text='确定'
        :styles="{top: '20px'}">
        <p>
	<h3 align="center" style="font-size:13.5pt;font-family:宋体;text-align:center;">
		<span class="SpellE"><span style="font-size:18pt;line-height:30px;font-family:微软雅黑, sans-serif;">EnergyClub</span></span><span style="font-size:18pt;line-height:30px;font-family:微软雅黑, sans-serif;">&nbsp;APP</span><span style="font-size:18pt;line-height:30px;font-family:微软雅黑, sans-serif;">内容开放平台注册协议</span><span style="font-size:28.5pt;line-height:47.5px;font-family:微软雅黑, sans-serif;"></span>
	</h3>
	<p style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>&nbsp;</span>
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		在<span class="GramE">您注册</span><span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>（以下简称“本平台”或“<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>”）、使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>服务（以下简称“本服务”或“<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>服务”）之前，应当仔细阅读并充分理解《<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>内容开放平台注册协议》（以下简称“本协议”）之全部条款<span>,</span>尤其是免除或者限制责任的条款、知识产权条款、法律适用及争议解决等。免除或者限制责任的条款可能以添加粗体和下划线标识提示您注意，请您务必重点阅读。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<b>您确认，在您开始注册程序使用<span class="GramE">本服务</span>前，您应该具备中华人民共和国法律规定的与<span class="GramE">您行为</span>相适应的民事行为能力。若您不具备与<span class="GramE">您行为</span>相适应的民事行为能力，尤其是如果您未满<span>18</span>周岁，应在监护人陪同下阅读本协议，一旦使用本服务，视为您已获得您监护人的同意或指导，在此情况下，您及您的监护人应依照法律规定承担因此而导致的一切后果。<span></span></b>
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<b>如果您对本协议的任何条款表示异议，或者无法准确理解本协议任何条款，请不要访问和<span>/</span>或使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>服务以及相关产品。您的注册、登录、访问<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>、使用<span class="GramE">本服务</span>等行为视为您已阅读并对本协议全部内容的接受。如您不同意本协议，请您立即停止使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>，如您已经下载了<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>，请立即删除。如您有违反本协议的任何行为时，本平台有权依照违反情况，随时单方限制、中止或终止向您提供本服务，并有权<span class="GramE">追究您</span>的相关责任。</b><b><span></span></b>
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<b>平台有权对本协议进行修订，并将在本平台上公布修订后的协议。您理解并同意，修订后的协议具有溯及力，如果您在本协议修订版本公布后继续使用本平台或<span class="GramE">本服务</span>的，即视为您同意修订后的协议。当您与平台发生争议时，应以最新的协议为准。</b><b><span></span></b>
	</p>
	<p style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>&nbsp;</span>
	</p>
	<h1 style="text-align:justify;font-size:12pt;font-family:微软雅黑, sans-serif;">
		一、本协议的确认和变更
	</h1>
	<p style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>1.</span>本协议是您（以下简称“用户”<span>,&nbsp;<span class="SpellE">EnergyClub</span>&nbsp;APP</span>用户的类型包括但不限于<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>用户和其他<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>产品用户、<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>未来不定期更换或增加的用户类型）与<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>之间关于注册、登录<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>、使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>任意服务所订立的有约束力的法律文件。
	</p>
	<p style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>2.&nbsp;<span class="SpellE">EnergyClub</span>&nbsp;APP</span>可能会不定期的更新本协议，用户可在<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>相关网站上查阅本协议的最新版本。<b>新协议一经公布即代替原协议。如用户不接受更新后的协议，应立即停止使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>服务。</b>
	</p>
	<h1 style="text-align:justify;font-size:12pt;font-family:微软雅黑, sans-serif;">
		二、<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>服务内容
	</h1>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>上提供内容开放平台，该平台是对自然人、法人或其他组织包括但不限于媒体及内容合作伙伴所开放的网络信息存储服务平台提供方。用户注册<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>后可以通过<span>APP</span>上<span class="GramE">传发布</span>内容、进行信息的传播等。<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>有权转载上<span class="GramE">传内容</span>至<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>旗下的分发渠道。<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>有权依照其与相关产品的共同安排，不时选定、变更或取消某一<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>产品作为<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>内容分发渠道。不同用户通过<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>所发布的内容将会在作为<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>内容分发渠道的不同<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>产品上得到自动展示。上述“<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>产品”包括但不限于<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>旗下所有相关媒体渠道、<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>及其他移动应用产品。对于上述<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>产品，应包括任何网站的子域名网页或平台，以及<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>不时更换或增加的网站及移动应用产品。
	</p>
	<h1 style="text-align:justify;font-size:12pt;font-family:微软雅黑, sans-serif;">
		三、账号注册、登录与使用
	</h1>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>1.</span>用户在使用<span class="GramE">本服务</span>前须进行<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>的账号实名注册和<span>/</span>或登录。用户须按照<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>要求填写和提供账号注册与认证的主体资料，完成信息登记，并对资料的真实性、合法性、准确性和有效性承担责任。自然人需提供包括但不限于身份信息、手机号及注册或更新注册信息时须输入的所有信息。法人及其他组织需提供营业执照或能证明其主体资格的其他文件及注册或更新注册信息时须输入的所有信息（以下统称“主体资料”）。如主体资料有任何变动，用户须及时联系<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>客服人员予以更新。如您上传、发布的内容需要取得相关法律法规规定的许可、进行备案或取得相关合法资质的（包括但不限于新闻信息采编传播资质、互联网视听内容制作及传播资质等），则您应自行取得相应的许可、备案或资质证明。否则，本平台有权拒绝或终止提供本服务，并依照本协议对违规<span class="GramE">帐号</span>进行处罚。因此给本平台或第三方造成损害的，您应当依法予以赔偿。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>2.</span>用户在注册账号、填写主体资料时须承诺遵守法律法规、社会主义制度、国家利益、公民合法权益、公共秩序、社会道德风尚和信息真实性等七条底线，不得在个人资料中出现违法和不良信息，不得冒用、关联机构或社会名人，且用户保证其在注册和使用账号时，特别不得有以下情形：
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>(1)</span>违反宪法或法律法规规定的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>(2)</span>危害国家安全，泄露国家秘密，煽动颠覆国家政权，推翻社会主义制度，煽动分裂国家，破坏国家统一的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>(3)</span>损害国家荣誉和利益的，损害公共利益的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>(4)</span>煽动民族仇恨、民族歧视，破坏民族团结的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>(5)</span>破坏国家宗教政策，宣扬邪教和封建迷信的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>(6)</span>散布谣言，扰乱社会秩序，破坏社会稳定的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>(7)</span>散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>(8)</span>侮辱或者诽谤他人，侵害他人合法权益的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>(9)</span>含有法律、行政法规或其他规范性法律文件禁止的其他内容的。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>3.</span>若用户提供给<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>的主体资料不准确、不真实、含有违法或不良信息或具有其他不能得到许可的理由，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>有权不予注册并保留终止用户使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>各项服务的权利。若用户体资料存在任何虚假、违法和其他不良信息的，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>有权采取通知其限期改正、暂停使用、注销登记等措施。对于冒用关联机构或社会名人注册账号名称的，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>有权注销该账号，并向政府主管部门进行报告。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>4.EnergyClub APP</span>产品用户账号（包括但不限于<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>）所有权归<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>所有。<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>用户账号仅限于用户本人使用，禁止赠与、借用、租用、转让或售卖。如果<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>发现使用者并非账号初始注册人，有权不经通知收回账号而无需向账号使用人承担法律责任，由此带来的包括但不限于通讯中断、资料等损失由用户自行承担。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>5.</span>用户有义务在注册时提供自己的真实资料，并保证提供的手机号码、姓名、所在地区等内容的有效性及安全性<span>,</span>保证<span class="SpellE"><span>EnergyClub</span></span>工作人员可以通过<span class="GramE">上述联系</span>方式与用户取得联系。<b><u>若因用户错误、虚假提供联系方式导致本平台无法与之取得联系而造成的一切后果和损失，均由用户承担，本平台不承担责任。</u></b><b><span></span></b>
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>6.</span>用户同意并授权，为了更好的为用户提供服务以及确保用户的账户安全，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>可以根据用户提供的手机号码、身份证号码等信息，向全国公民身份号码查询服务中心、电信运营商、金融服务机构等第三方机构发起用户身份真实性、用户手机号码有效性状态等情况的查询。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>7.</span>用户同意，与注册、登录、使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>账号相关的一切数据和记录，包括但不限于所有登录和相关的使用统计数字等，归<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>所有；发生争议时，用户同意以<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>的系统数据为准。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>8.</span>用户有责任妥善保管<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>账号信息及账号密码的安全，用户需要对<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>账号下的行为承担法律责任。由于账号、密码等信息外借、泄露或者被他人盗用而引起的法律责任，由用户自行承担。用户同意在任何情况下不使用其他用户的账号。用户同意若发现任何非法使用用户账号或安全漏洞的情况，有义务立即告知<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>。<b><u>因黑客行为、您保密措施不当或您的其他行为，致使账号信息或账号密码等丢失或泄漏所引起的一切损失和后果，均由您自行承担，平台不承担责任。<span></span></u></b>
	</p>
	<h1 style="text-align:justify;font-size:12pt;font-family:微软雅黑, sans-serif;">
		四、用户个人信息保护
	</h1>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>1.</span>保护用户个人信息是<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>的一项基本原则，本平台将会采取合理的措施保护用户的个人信息。除本协议另有约定和法律法规规定的情形外，未经用户许可平台不会向第三方公开、透露用户个人信息。本平台对相关信息采用专业加密存储与传输方式，保障用户个人信息的安全。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>2.&nbsp;</span>您在申请<span class="GramE">本服务</span>过程中，需要填写一些必要的信息，请保持这些信息的真实、准确、合法、有效并注意及时更新，以便本平台向您提供及时有效的帮助，或更好地为您提供服务。根据相关法律法规和政策，请您填写真实的身份信息。若您填写的信息不完整或不准确，则可能无法使用<span class="GramE">本服务</span>或在使用过程中受到限制。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>3.&nbsp;</span><b>您应对通过<span class="GramE">本服务</span>了解、接收或可接触到的包括但不限于其他用户在内的任何人的个人信息予以充分尊重，您不应以搜集、复制、存储、传播或以其他任何方式使用其他用户的个人信息，否则，由此产生的后果由您自行承担。<span></span></b>
	</p>
	<h1 style="text-align:justify;font-size:12pt;font-family:微软雅黑, sans-serif;">
		五、用户权利义务
	</h1>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>1 .</span>用户管理<b><span></span></b>
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		用户独立承担其<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>发布内容的责任。用户对<span class="GramE">本服务</span>的使用必须遵守所有适用于服务的地方法律、国家法律和国际法律。用户承诺：
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>1</span>）用户在<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>上制作、上传、复制、发布、传播的任何内容<span>,</span>包括但不限于账号头像、名称、用户说明等注册信息及认证资料，或文字、语音、图片、视频、图文等发送、回复和相关链接页面，以及其他使用账号或<span class="GramE">本服务</span>所产生的内容必须符合中国有关法律、法规、规章、政策，不得在<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>的网页上或者利用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>服务制作、复制、发布、传播以下信息：
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>a</span>）违反宪法或法律法规规定的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>b</span>）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>c</span>）损害国家荣誉和利益的，损害公共利益的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>d</span>）煽动民族仇恨、民族歧视，破坏民族团结的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>e</span>）破坏国家宗教政策，宣扬邪教和封建迷信的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>f</span>）散布谣言，扰乱社会秩序，破坏社会稳定的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>g</span>）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>h</span>）侮辱或者诽谤他人，侵害他人合法权益的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>i</span>）煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>j</span>）以非法民间组织名义活动的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>k</span>）不符合《即时通信工具公众信息服务发展管理暂行规定》及遵守法律法规、社会主义制度、国家利益、公民合法利益、公共秩序、社会道德风尚和信息真实性等“七条底线”要求的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>l</span>）含有法律、行政法规或其他规范性法律文件所禁止的其他内容的。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>2</span>）用户不得利用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>从事制作、复制、上传、发布、传播如下内容：
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>a</span>）骚扰信息、广告信息及垃圾信息或含有任何性或性暗示以及任何其他低俗类信息；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>b</span>）未经<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>允许发布广告；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>c</span>）涉及他人隐私、个人信息或资料的内容；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>d</span>）侵害他人合法权益，包括但不限于名誉权、肖像权、知识产权、商业秘密、隐私权等
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>e</span>）谣言、虚假信息或其他含有不实信息的内容。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>3</span>）为确保<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>和用户的利益，用户在使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>时，不应进行如下行为（该行为是指使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>相关产品<span class="GramE">帐户</span>所进行的任何行为，包括但不限于注册登录、<span class="GramE">帐号</span>运营、管理及推广以及其他行为）：
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>a</span>）强制、诱导其他用户关注、点击链接页面或分享信息；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>b</span>）虚构事实、隐瞒真相以误导、欺骗他人；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>c</span>）未经<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>书面许可使用插件、外挂或<span class="GramE">其他第三</span>方工具、服务接入<span class="GramE">本服务</span>和相关系统；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>d</span>）利用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>及<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span><span class="GramE">帐户</span>从事违法犯罪活动；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>e</span>）不得利用非法软件或其他作弊方式进行欺诈行为（包括但不限于刷订阅数、刷评论数、刷点击量等），也不得利用系统漏洞来获得不正当的非法利益；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>f</span>）制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>g</span>）仿冒、混淆他人账号昵称、头像、功能介绍或发布内容等，或冒充、利用他人名义的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>h</span>）任何导致或可能导致本平台与第三方产生纠纷、争议或诉讼的行为；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>i</span>）其他以任何不合法的方式、为任何不合法的目的、或以任何与本条款不一致的方式使用、干扰本服务。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>4</span>）您在使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>的过程中，不得从事包括但不限于以下行为，也不得为以下行为提供便利（包括但不限于为用户的行为提供便利等）：
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>a</span>） 删除、隐匿、改变<span class="GramE">本服务</span>显示或其中包含的任何专利、著作权、商标或其他权利声明；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>b</span>）以任何方式干扰或企图干扰本平台任何产品、任何部分或功能的正常运行，或者制作、发布、传播上述工具、方法等；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>c</span>）除无法绕开的内容显示需要外，未经本平台书面许可，不得以本平台名义使用任何平台商标标识或其任何变体、缩写、改写等；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>d</span>） 在未经过用户同意的情况下，向任何其他用户及他方显示或以其他任何方式提供该用户的任何信息；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>e</span>） 在没有获得用户和本平台明示同意的情况下，擅自以<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>的名义向用户发布、发送商业广告等信息；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>f</span>） 发布的信息内容中含有计算机病毒、木马或者其他恶意程序、链接等任何可能危害本平台或用户权益和终端信息安全等的内容；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>g</span>） 捏造或虚构事实，或未经本平台书面同意，公开表达或暗示，您与本平台之间存在合作关系，包括但不限于相互持股、商业往来或合作关系等，或声称本平台对您的认可；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>h</span>） 其他本平台认为不应该、不适当的行为、内容。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>2.</span>用户须对自己在使用<span class="GramE">本服务</span>过程中的行为承担法律责任。若用户违反以上规定，导致第三方向<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>及其关联公司、合作公司提出索赔等要求的，用户同意承担全部法律责任，包括但不限于赔偿金、罚金、和解费、诉讼仲裁费、合理的律师费支出等，并同意赔偿因此给<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>造成的损害。用户承担赔偿责任的方式包括但不限于根据<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>的书面通知向其支付与损失等额的资金等。若用户违反以上规定，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>有权<span class="GramE">视严重</span>情况，对违反本协议的用户采取以下单项或多项措施进行处罚：
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>1</span>）暂停<span>/</span>终止提供全部或部分服务；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>2</span>）删除违规内容；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>3</span>）暂时<span>/</span>永久封禁账号；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>3.</span>用户在此免费地、永久性地、不可撤销地在全世界范围内授权<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>在推广等活动中（包括但不限于对外宣传、产品介绍等）免费使用其姓名（包括但不限于真实姓名、笔名、网名及<span class="GramE">任何代表</span>用户身份的文字符号）、肖像（包括但不限于真人肖像及卡通肖像）、商标及标识。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>4.EnergyClub APP</span>尊重知识产权并注重保护用户享有的各项权利。用户同意授予<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>及<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>产品在全世界范围内免费地、永久性地、不可撤销地使用和转授权用户通过<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>发布或用户使用<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>服务过程中形成的信息及内容（包括但不限于文字、图片、音频、视频）等（若其中涉及第三方知识产权的，您应拥有合法的授权或转授权），<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>及<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>产品可以通过包括但不限于使用、复制、发行、改编、汇编、传播、修改、转授权、摄制、翻译、创建衍生作品、出版、表演、放映等方式使用相关内容。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>5.</span>如果任何第三方侵犯了用户上述第四条第<span>3</span>款各项权利，用户同意授权<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>或其指定的代理人代表<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>自身或用户对该第三方提出维权主张（包括但不限于警告、投诉、谈判或诉讼等方式），并且用户同意在<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>认为必要的情况下提供配合共同参与维权。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>6.</span>您理解并同意：
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>1</span>）您用以参与本平台服务的账号由<span class="GramE">您独立</span>维护、运营并独立承担全部责任。本平台不会、也不可能参与您拥有的账号的运营等独立活动；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>2</span>）本平台自主开发并独立享有<span class="GramE">本服务</span>技术接口的知识产权等合法权益，<span class="GramE">您仅在本服务</span>范围内进行使用；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>3</span>）因您的原因导致的任何纠纷、责任等，以及您或您的账号违反相关法律法规或本协议约定引发的任何后果，均由<span class="GramE">您独立</span>承担责任、赔偿损失，与本平台无关。如侵害到本平台或他人权益的，您须自行承担全部责任和赔偿一切损失。
	</p>
	<h1 style="text-align:justify;font-size:12pt;font-family:微软雅黑, sans-serif;">
		六、用户隐私制度
	</h1>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		尊重用户隐私是<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>的一项基本政策。<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>将按照<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>网站上公布的隐私政策收集、存储、使用、披露和保护您的个人信息。请您完整阅读本平台所公布的隐私权政策，以帮助您更好地保护您的个人信息。
	</p>
	<h1 style="text-align:justify;font-size:12pt;font-family:微软雅黑, sans-serif;">
		七、知识产权
	</h1>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>1.</span><span class="GramE">本服务</span>中所涉及的<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>产品图形、文字或其组成，以及其他<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>标志及产品、服务名称，均为本平台标识。未经本平台事先书面同意，用户不得将本平台标识以任何方式展示、使用或申请注册商标、进行域名注册等，也不得实施向他人明示或暗示有权展示、使用、或其他有权处理本平台标识的行为。用户由于非法使用本平台标识给本平台或他人造成损失的，由用户承担相关法律责任。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>2.</span>经由<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>传送的文字、图片、音频、视频及其他内容，受到著作权法、商标法、专利法或其他法律的保护；未经<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>书面授权许可，用户不得自行或许可第三方进行复制、转载、传播、修改、售卖、衍生其他作品或者从事其他侵犯本平台知识产权的行为。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>3.&nbsp;<span class="SpellE">EnergyClub</span>&nbsp;APP</span>是一个获取、分享及传播信息的平台，为向所有用户提供更优质的服务，本平台可能会对账号的昵称、头像等公开非保密内容在法律允许的范围内进行使用。您知悉、理解并同意，为<span class="GramE">促进您</span>所发布、传播内容的更好传播，本平台将在<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>平台及<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>转授权的其他网站、应用程序、产品或终端设备中与您所发布、传播的内容一并展示您的账号的昵称、头像等公开非保密内容。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>4.&nbsp;</span>上述及其他任何<span class="GramE">本服务</span>包含的内容的知识产权均受到法律保护，未经<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>、用户或相关权利人书面许可，任何人不得以任何形式进行使用或创造相关衍生作品。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>5.&nbsp;</span>任何我们未执行本协议或未向您主张我们在本协议项下的权利、索赔或诉因的行为均不被视为放弃我们向您主张任何权利、索赔或诉因的权利。<span></span>
	</p>
	<h1 style="text-align:justify;font-size:12pt;font-family:微软雅黑, sans-serif;">
		八、风险及免责
	</h1>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>1.&nbsp;</span>您理解并同意：为了向您提供有效的服务，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>会利用您终端设备的处理器和带宽等资源。<span class="GramE">本服务</span>使用过程中可能产生数据流量的费用，您需自行向运营商了解相关资费信息，并自行承担相关费用。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>2.&nbsp;</span>您理解并同意：<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>将按照行业标准和最佳实践采取合理措施保障您的信息安全。在使用<span class="GramE">本服务</span>时，对于经合理努力后仍不可掌控的风险给您造成的损失，本平台不承担相应的责任，包括但不限于：
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>a</span>）用户因本平台公告之系统停机维护、升级、调整；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>b</span>）第三方原因如电信部门的通讯设备故障、计算机病毒或黑客攻击、技术问题、网络、电脑故障、系统不稳定性等；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>c</span>）台风、地震、海啸、洪水、停电、战争、恐怖袭击、政府管制及其他各种不可抗力原因；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>d</span>） 用户操作不当或通过非本平台授权的方式使用<span class="GramE">本服务</span>带来的损失和风险；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>e</span>）用户发布的内容被他人转发、分享，因此等传播可能带来的风险和责任；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>f</span>） 由于网络信号不稳定等原因，所引起的本平台登录失败、资料同步不完整、页面打开速度慢等风险；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>g</span>） 其他本平台无法控制或合理预见的情形。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>3.&nbsp;</span>您理解并同意，基于用户体验、本平台运营安全、平台规则要求及健康发展等综合因素，本平台有权选择提供服务或开展合作的对象，有权决定功能开放、数据接口和相关数据披露的对象和范围，并有权视具体情况中止或终止向存有包括但不限于以下情形的用户提供本服务：
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>a</span>） 违反法律法规或本协议规定的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>b</span>） 影响使用者体验的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>c</span>） 存在安全隐患的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>d</span>） 与本平台已有主要功能或功能组件相似、相同，或可实现上述功能或功能组件的主要效用的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>f</span>） 界面、风格、功能、描述或使用者体验与不让本平台类似，可能造成用户认为其所使用的功能或服务来源于本平台或经本平台授权的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>g</span>） 未遵循公平、对等原则与本评估开展合作的；
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		（<span>h</span>） 其他不符合本平台管理要求的。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<b><span>4.EnergyClub APP</span>对账号上所有服务将尽力维护其安全性及方便性，但对服务中出现的信息（包括但不限于用户发布的信息）删除或储存失败不承担任何责任。因技术故障等不可<span class="GramE">抗事件</span>影响到服务的正常运行的，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>及其合作单位承诺在第一时间内与相关单位配合，及时处理进行修复，但用户因此而遭受的一切损失，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>及其合作单位不承担责任。<span></span></b>
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>5.</span><b>用户在使用<span class="GramE">本服务</span>中发布的任何内容、信息等并不反映或代表本平台的观点、立场或政策，本平台对此不承担任何责任。</b>用户应对本平台上其他用户的内容自行加以判断，并承担因使用该内容而给自己、他人及社会造成的一切法律责任，包括但不限于因对内容的准确性、真实性、完整性或实用性等的依赖而产生的风险。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>6.<b>EnergyClub APP</b></span><b>可能会提供第三方互联网网站或资源链接，除非另有声明外，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>无法对上述网站或资源链接进行控制，因此由于下载、传播、使用或依赖上述网站或资源所生的损失或损害，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>不承担任何责任。<span></span></b>
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>7.<b>EnergyClub APP</b></span><b>始终在不断变更和改进服务。<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>可能会变更、增加或删除部分功能，也可能暂停、限制或彻底停止某项或全部服务，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>做出该等行为不需要事先进行通知。用户同意<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>有权行使上述权利且不需对用户或第三方承担任何责任。</b>
	</p>
	<h1 style="text-align:justify;font-size:12pt;font-family:微软雅黑, sans-serif;">
		九、法律适用及争议解决<u><span></span></u>
	</h1>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>1.&nbsp;</span>如果<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>发现或收到他人投诉用户违反本协议约定的，有权不经通知随时对相关内容进行删除、屏蔽，并<span class="GramE">视行为</span>情节对违规<span class="GramE">帐号</span>处以包括但不限于限制或禁止使用部分或全部功能、<span class="GramE">帐号</span>封禁直至注销的处罚，并公告处理结果。<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>也有权依照本协议及专项规则的规定，拒绝再向该主体提供服务。如果您发现任何人违反本协议规定或以其他不当的方式使用本平台服务，请立即向本平台投诉，我们将依法进行处理。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>2.&nbsp;</span>您理解并同意，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>有权<span class="GramE">依合理</span>判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何人士采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，您应独自承担由此而产生的一切法律责任。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>3.&nbsp;</span>您理解并同意，因您违反本协议、专项规则或相关服务条款的规定，导致或产生第三方主张的任何索赔、要求或损失，您应当独立承担责任；<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>因此遭受损失的，您也应当一并赔偿。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>4.</span>本协议适用中华人民共和国的法律，并且排除一切冲突法规定的适用。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>5.</span><b>凡因本协议引起的或与本协议有关的任何争议，双方应尽力友好协商解决；协商不成时，双方在此同意提交中国国际仲裁院，按照申请仲裁时该会现行有效的仲裁规则进行仲裁。仲裁地点为深圳，应由三名仲裁员组成仲裁庭。仲裁裁决是终局的，对双方均有约束力。<span></span></b>
	</p>
	<h1 style="text-align:justify;font-size:12pt;font-family:微软雅黑, sans-serif;">
		十、附则
	</h1>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>1.EnergyClub APP</span>不行使、未能及时行使或者未充分行使本协议或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>在将来行使该权利。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>2.</span>如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍<span class="GramE">应有效且具有</span>约束力，<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>及用户均应尽力使该协议设定的本意得到实现。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>3.</span>本协议中的标题仅为方便而设，不作为解释本协议的依据。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>4.&nbsp;</span>本协议最终解释权归<span>&nbsp;<span class="SpellE">EnergyClub</span></span>所有，并且保留一切解释和修改的权力。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>5.&nbsp;</span>如有任何疑问，请联系<span class="SpellE"><span>EnergyClub</span></span><span>&nbsp;APP</span>客服。
	</p>
	<p class="MsoNormal" style="font-size:medium;font-family:微软雅黑, sans-serif;text-align:justify;">
		<span>6.</span>本协议自<span>2020</span>年【<span>9</span>】月【<span>16</span>】日起生效
	</p>
</p>
        </Modal>
        <!-- <button id="bluecolor" @click="promise">{{ $t("select[14]") }}</button> -->
      </span>
        <span v-else>
        {{ $t("select[10]") }}
        <Button type="primary" @click="modal2 = true"
          id="language"> {{ $t("select[14]") }}</Button
        >
        <Modal
          v-model="modal2"
          title=""
          ok-text='sure'
        :styles="{top: '20px'}">
      <p>
	<h5 align="center" style="text-align:center;font-size:14pt;font-family:Calibri, sans-serif;">
		<span>The Application EnergyClub Content Open Platform Registration Agreement</span>
	</h5>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>&nbsp;</span>
	</p>
	<h5 style="text-align:justify;font-size:14pt;font-family:Calibri, sans-serif;">
		<span style="font-size:10.5pt;line-height:21px;font-weight:normal;">Before you register for the Application EnergyClub (hereinafter referred to as "the platform" or "EnergyClub APP") and use EnergyClub APP service (hereinafter referred to as "the service" or "EnergyClub APP service"), you should carefully read and fully understand The Application EnergyClub Content Open Platform Registration Agreement(hereinafter referred to as the&nbsp;</span><span style="font-size:10.5pt;line-height:21px;font-family:宋体;font-weight:normal;">“</span><span style="font-size:10.5pt;line-height:21px;font-weight:normal;">Agreement</span><span style="font-size:10.5pt;line-height:21px;font-family:宋体;font-weight:normal;">”</span><span style="font-size:10.5pt;line-height:21px;font-weight:normal;">), especially the terms exempting or limiting liability, intellectual property terms, application of law and dispute resolution, etc. The terms of exemption or limitation of liability may be marked in bold and underlined to remind you to pay attention, please be sure to read it. You confirm that before you start the registration process to use this service, you should have the civil capacity required by the laws of the People's Republic of China that is compatible with your behavior. If you do not have the civil capacity for your behavior, especially if you are under 18 years old, you should read this agreement with your guardian. Once you use this service, you are deemed to have obtained the consent or guidance of your guardian. In this case, you and your guardian shall bear all consequences arising therefrom in accordance with the law.</span>
	</h5>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>If you disagree with any provision of this agreement, or cannot accurately understand any provision of this agreement, please do not access and or or use EnergyClub APP services and related products. Your registration, login, access to EnergyClub APP, use of this service, etc., are deemed to have been read and accepted by you. If you do not agree to this agreement, please stop using the EnergyClub APP immediately. If you have already downloaded the EnergyClub APP, please delete it immediately. If you violate any of this agreement, this platform has the right to unilaterally restrict, suspend or terminate the provision of this service to you at any time in accordance with the violation, and has the right to pursue your related responsibilities.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>The platform has the right to amend this agreement and will publish the revised agreement on this platform. You understand and agree that the revised agreement has retrospective effect. If you continue to use the platform or this service after the revised version of this agreement is announced, you will be deemed to agree to the revised agreement. When you have a dispute with the platform, the latest agreement shall prevail.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>&nbsp;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<b><span style="font-size:16pt;line-height:32px;">1. Confirmation and change of this agreement</span></b>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1. This agreement is between you (hereinafter referred to as the "user", the types of EnergyClub APP users including but not limited to EnergyClub APP users and other EnergyClub APP product users, and the types of users that EnergyClub APP will change or increase from time to time in the future) and EnergyClub APP Binding legal documents established by registering, logging in to EnergyClub APP, and using any service of EnergyClub APP.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>2. EnergyClub APP may update this agreement from time to time. Users can check the latest version of this agreement on the relevant website of EnergyClub APP. The new agreement will replace the original agreement as soon as it is announced. If the user does not accept the updated agreement, he should stop using the EnergyClub APP service immediately.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<b><span style="font-size:16pt;line-height:32px;">2. EnergyClub APP service content</span></b>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>The EnergyClub APP provides a content open platform, which is a network information storage service platform provider open to natural persons, legal persons or other organizations, including but not limited to media and content partners. After registering the EnergyClub APP, users can upload and publish content and disseminate information through the APP. EnergyClub APP has the right to reprint the uploaded content to the distribution channels of EnergyClub APP. EnergyClub APP has the right to select, change or cancel a certain EnergyClub APP product as the EnergyClub APP content distribution channel from time to time in accordance with its joint arrangement with related products. The content released by different users through the EnergyClub APP will be automatically displayed on different EnergyClub APP products that are the content distribution channel of the EnergyClub APP. The aforementioned "EnergyClub APP products" include but are not limited to all related media channels under EnergyClub APP, EnergyClub APP and other mobile application products. For the above-mentioned EnergyClub APP products, it shall include the subdomain pages or platforms of any website, as well as the websites and mobile application products that EnergyClub APP replaces or adds from time to time.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>&nbsp;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<b><span style="font-size:16pt;line-height:32px;">3. Account registration, login and use in EnergyClub APP</span></b>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1. Before using this service, users must register and or or log in to the EnergyClub APP account. The user must fill in and provide the subject information for account registration and authentication in accordance with the EnergyClub APP requirements, complete the information registration, and be responsible for the authenticity, legality, accuracy and validity of the information. Natural persons need to provide all information including but not limited to identity information, mobile phone number and all information that must be entered when registering or updating registration information. Legal persons and other organizations need to provide business licenses or other documents that can prove their subject qualifications and all information that must be entered when registering or renewing registration information (hereinafter collectively referred to as "subject information"). If there is any change in the main information, the user must contact the EnergyClub APP customer service staff to update it. If the content you upload and publish needs to obtain the permits required by relevant laws and regulations, record it, or obtain relevant legal qualifications (including but not limited to qualifications for news and information acquisition, editing and dissemination, Internet audio-visual content production and dissemination qualifications, etc.), you should obtain it yourself The corresponding license, filing or qualification certificate. Otherwise, this platform has the right to refuse or terminate the provision of this service and impose penalties on illegal accounts in accordance with this agreement. Therefore, if you cause damage to this platform or a third party, you should compensate according to law.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>2. When registering an account and filling in the subject information, the user must promise to abide by the seven bottom lines of laws and regulations, the socialist system, national interests, the legitimate rights and interests of citizens, public order, social ethics and information authenticity, and no illegal and illegal information should appear in the personal data. Harmful information must not be fraudulently used, affiliated institutions or social celebrities, and the user guarantees that when registering and using the account, there must be no such circumstances:<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(1) Violation of the Constitution or laws and regulations;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(2) Endangering national security, leaking state secrets, inciting subversion of state power, overthrowing the socialist system, inciting division of the country, and undermining national unity;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(3) Damage to national honor and interests, damage to public interests;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(4) Inciting ethnic hatred, ethnic discrimination, and undermining ethnic unity;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(5) Undermining the state's religious policies, promoting cults and feudal superstition;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(6) Spreading rumors, disturbing social order, and undermining social stability;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(7) Spreading obscenity, pornography, gambling, violence, murder, terror or instigating crime;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(8) Insulting or slandering others, infringing on the legal rights of others;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(9) Contains other content prohibited by laws, administrative regulations or other regulatory legal documents.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>3. If the main information provided by the user to the EnergyClub APP is inaccurate, untrue, contains illegal or bad information, or has other reasons that cannot be licensed, EnergyClub APP has the right not to register and reserves the right to terminate the user's use of EnergyClub APP services . If there is any false, illegal or other bad information in the user profile, EnergyClub APP has the right to take measures such as notifying it to correct within a time limit, suspend use, and cancel registration. For fraudulent use of the registered account name of an affiliate or social celebrity, EnergyClub APP has the right to cancel the account and report to the competent government department.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>4. The ownership of EnergyClub APP product user accounts (including but not limited to EnergyClub APP) belongs to EnergyClub APP. The EnergyClub APP user account is restricted to the user, and it is forbidden to give, borrow, rent, transfer or sell. If EnergyClub APP finds that the user is not the initial registrant of the account, it has the right to withdraw the account without notice without having to bear legal responsibility to the account user. The resulting loss including but not limited to communication interruption and data loss shall be borne by the user.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>5. Users are obliged to provide their true information when registering, and to ensure the validity and security of the provided mobile phone number, name, and location, and to ensure that EnergyClub staff can contact the user through the above contact information. All consequences and losses caused by the user's error or false provision of contact information that cause the platform to be unable to contact with it shall be borne by the user, and the platform shall not be liable.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>6. The user agrees and authorizes that in order to better provide services to users and ensure the security of users</span><span style="font-family:宋体;">’</span><span>&nbsp;accounts, EnergyClub APP can query the service center and telecom operators with the national citizenship number based on the mobile phone number and ID number provided by the user. , Financial service institutions and other third-party institutions initiate inquiries on the authenticity of the user's identity and the validity status of the user's mobile phone number.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>7. The user agrees that all data and records related to registration, login, and use of EnergyClub APP account, including but not limited to all logins and related usage statistics, etc., belong to EnergyClub APP; in the event of a dispute, the user agrees to use EnergyClub APP System data shall prevail.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>8. The user is responsible for properly keeping the EnergyClub APP account information and the security of the account password, and the user needs to bear legal responsibility for the actions under the EnergyClub APP account. The user shall bear the legal responsibility caused by the loan, leakage or embezzlement of information such as account number and password. The user agrees not to use another user's account under any circumstances. The user agrees that if any illegal use of the user account or security breach is found, he is obliged to inform the EnergyClub APP immediately. All losses and consequences caused by the loss or disclosure of account information or account passwords due to hacking, improper confidentiality measures or your other actions shall be borne by you, and the platform shall not be liable.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<b><span style="font-size:16pt;line-height:32px;">4. User personal information protection</span></b>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1. Protecting users' personal information is a basic principle of EnergyClub APP. This platform will take reasonable measures to protect users' personal information. Except as otherwise agreed in this agreement and provided by laws and regulations, the platform will not disclose or disclose user personal information to third parties without user permission. This platform uses professional encrypted storage and transmission methods for related information to ensure the security of users' personal information.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>2. In the process of applying for this service, you need to fill in some necessary information. Please keep this information true, accurate, legal, and effective and pay attention to timely update, so that this platform can provide you with timely and effective help, or better serve You provide services. According to relevant laws, regulations and policies, please fill in your true identity information. If the information you fill in is incomplete or inaccurate, you may not be able to use this service or be restricted during use.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>3. You should fully respect the personal information of anyone, including but not limited to other users, that you understand, receive, or have access to through this service, and you should not collect, copy, store, disseminate or use it in any other way The personal information of other users, otherwise, the consequences arising therefrom shall be borne by you.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>&nbsp;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<b><span style="font-size:16pt;line-height:32px;">5. User rights and obligations</span></b>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1. User Management</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>Users independently bear the responsibility for the content published by their EnergyClub APP. The user's use of this service must comply with all local, national and international laws applicable to the service. User commitment:<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1.1 Any content created, uploaded, copied, published, and disseminated by users on EnergyClub APP, including but not limited to account avatars, names, user descriptions and other registration information and authentication materials, or text, voice, pictures, videos, graphics Pages for sending, replying, and related links, as well as other content generated by using the account or this service must comply with relevant Chinese laws, regulations, rules, and policies, and must not be produced, copied, published, or published on the EnergyClub APP webpage or using the EnergyClub APP service. Disseminate the following information:</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(A) Violation of the Constitution or laws and regulations;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(B) Endangering national security, leaking state secrets, subverting state power, and undermining national unity;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(C) Damage to national honor and interests, damage to public interests;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(D) Inciting ethnic hatred, ethnic discrimination, and undermining ethnic unity;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(E) Undermining the state's religious policies and promoting cults and feudal superstition;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(F) Spreading rumors, disturbing social order and undermining social stability;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(G) Spreading obscenity, pornography, gambling, violence, murder, terror or instigating crime;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(H) Insulting or slandering others, infringing on the lawful rights and interests of others;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(I) Inciting illegal assemblies, associations, processions, demonstrations, gathering crowds to disrupt social order;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(J) Activities in the name of illegal civil organizations;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(K) Those that do not comply with the "Interim Provisions on the Development and Management of Public Information Services for Instant Messaging Tools" and comply with the "seven bottom lines" requirements of laws and regulations, the socialist system, national interests, citizens' legitimate interests, public order, social morality and information authenticity, etc.&nbsp;</span><span style="font-family:宋体;">；</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(L) Contains other content prohibited by laws, administrative regulations or other normative legal documents.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1.2 Users shall not use the EnergyClub APP to engage in the production, copying, uploading, publishing, or dissemination of the following content:</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(A) Harassing information, advertising information and spam or containing any genderual or genderual suggestion and any other vulgar information;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(B) Publish advertisements without the permission of EnergyClub APP;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(C) Content that involves the privacy, personal information or data of others;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(D) Infringement of the legitimate rights and interests of others, including but not limited to reputation rights, portrait rights, intellectual property rights, trade secrets, privacy rights, etc.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(E) Rumors, false information or other content that contains false information.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1.3 In order to ensure the interests of EnergyClub APP and users, users should not perform the following behaviors when using EnergyClub APP (this behavior refers to any behavior performed by using EnergyClub APP related product accounts, including but not limited to registration and login, account operation , Management and promotion, and other behaviors):</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(A) Force or induce other users to follow, click on linked pages or share information;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(B) Fictional facts and concealing the truth to mislead or deceive others;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(C) Use plug-ins, plug-ins or other third-party tools and services to access this service and related systems without the written permission of EnergyClub APP;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(D) Use EnergyClub APP and EnergyClub APP account to engage in illegal and criminal activities;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(E) Do not use illegal software or other cheating methods to commit fraud (including but not limited to the number of subscriptions, the number of comments, the number of clicks, etc.), and the system loopholes must not be used to obtain improper and illegal benefits;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(F) Making and publishing methods and tools related to the above actions, or operating or disseminating such methods and tools, regardless of whether these actions are for commercial purposes;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(G) Counterfeit or confuse others' account nicknames, avatars, function introductions or published content, or impersonate or use the names of others;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(H) Any behavior that causes or may cause disputes, disputes or litigation between this platform and a third party;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(I) Other use or interference with this service in any illegal way, for any illegal purpose, or in any way inconsistent with this clause.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1.4 In the process of using EnergyClub APP, you must not engage in the following behaviors, including but not limited to, or provide convenience for the following behaviors (including but not limited to providing convenience for users' behavior, etc.):</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(A) Delete, hide, or change any patents, copyrights, trademarks or other rights statements displayed on or contained in this service;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(B) Interfering or attempting to interfere with the normal operation of any product, any part or function of this platform in any way, or making, publishing, or disseminating the aforementioned tools and methods;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(C) Except for content display needs that cannot be circumvented, without the written permission of the platform, any platform trademark logo or any variant, abbreviation, or rewriting, etc., shall not be used in the name of the platform;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(D) Without the user's consent, display or provide any information of the user to any other user and other parties;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(E) Publish and send commercial advertisements and other information to users in the name of EnergyClub APP without the explicit consent of users and the platform;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(F) The published information contains computer viruses, Trojan horses or other malicious programs, links, and any other content that may endanger the platform or user rights and terminal information security;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(G) Fabricate or fabricate facts, or without the written consent of this platform, publicly express or imply that there is a cooperative relationship between you and this platform, including but not limited to mutual shareholding, business dealings or cooperative relations, etc., or claim that this platform Recognition of you;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(H) Other behaviors and content that this platform deems inappropriate or inappropriate.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>2. Users shall bear legal responsibility for their actions in the process of using this service. If the user violates the above regulations and causes a third party to lodge a claim against EnergyClub APP, its affiliates, and cooperative companies, the user agrees to bear all legal liabilities, including but not limited to compensation, fines, settlement fees, litigation and arbitration fees, and reasonable Attorney fees, etc., and agreed to compensate for the damage caused to EnergyClub APP. The user</span><span style="font-family:宋体;">’</span><span>s liability for compensation includes, but is not limited to, payment of funds equal to the loss in accordance with the written notice of EnergyClub APP. If a user violates the above regulations, EnergyClub APP has the right to take the following single or multiple measures to punish users who violate this agreement based on serious circumstances:</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(1) Suspend or terminate the provision of all or part of the service;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(2) Delete the illegal content;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(3) Temporarily or permanently ban the account;<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>3. The user hereby authorizes the EnergyClub APP to use his name (including but not limited to true) for free, permanently, and irrevocably throughout the world in promotion and other activities (including but not limited to external publicity, product introduction, etc.) Name, pen name, screen name, and any text symbols representing the identity of the user), portraits (including but not limited to real portraits and cartoon portraits), trademarks and logos.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>4. EnergyClub APP respects intellectual property rights and pays attention to protecting the rights enjoyed by users. The user agrees to grant EnergyClub APP and EnergyClub APP products to use and sublicense the information and content (including but not Limited to text, pictures, audio, video), etc. (if third-party intellectual property rights are involved, you should have a legal authorization or sublicense), EnergyClub APP and EnergyClub APP products can be used, including but not limited to, use, copy, release, and adaptation , Compilation, dissemination, modification, sublicense, filming, translation, creation of derivative works, publication, performance, and screening of related content.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>5. If any third party infringes the user's rights in Article 4, paragraph 3 above, the user agrees to authorize the EnergyClub APP or its designated agent to make claims (including but not limited to warnings) on behalf of the EnergyClub APP itself or the user against the third party , Complaints, negotiations or litigation), and the user agrees to provide cooperation and participate in rights protection if the EnergyClub APP deems it necessary.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>6. You understand and agree:</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(1) The account you use to participate in the services of this platform is independently maintained and operated by you and assumes all responsibilities independently. This platform will not and cannot participate in independent activities such as the operation of your account;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(2) This platform is independently developed and independently enjoys the legal rights and interests of the intellectual property rights of the technical interface of this service, and you can only use it within the scope of this service;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(3) Any disputes, liabilities, etc. caused by you, as well as any consequences caused by your or your account's violation of relevant laws and regulations or the provisions of this agreement, shall be solely responsible for you and compensate for losses, and have nothing to do with this platform. If you infringe on the rights and interests of this platform or others, you must bear full responsibility and compensate for all losses.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>&nbsp;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<b><span style="font-size:16pt;line-height:32px;">6. User privacy system</span></b>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>Respect for user privacy is a basic policy of EnergyClub APP. EnergyClub APP will collect, store, use, disclose and protect your personal information in accordance with the privacy policy published on the EnergyClub APP website. Please read the privacy policy published on this platform in its entirety to help you better protect your personal information.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<b><span style="font-size:16pt;line-height:32px;">7. Intellectual Property</span></b>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1. The EnergyClub APP product graphics, text or their composition involved in this service, as well as other EnergyClub APP logos, product and service names, are all logos of this platform. Without the prior written consent of this platform, users shall not display, use or apply for trademark registration, domain name registration, etc. of the platform logo in any way, nor shall they express or imply the right to display, use, or other rights to process this platform. The behavior of platform identification. If the user causes losses to the platform or others due to the illegal use of the platform logo, the user shall bear the relevant legal responsibility.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>2. The text, pictures, audio, video and other content transmitted through EnergyClub APP are protected by copyright law, trademark law, patent law or other laws; without the written authorization of EnergyClub APP, users are not allowed to copy by themselves or a third party , Reprint, spread, modify, sell, derive other works, or engage in other acts that infringe on the intellectual property rights of this platform.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>3. The EnergyClub APP is a platform for acquiring, sharing and disseminating information. In order to provide better services to all users, this platform may use public and non-confidential content such as account nicknames and avatars within the scope permitted by law. You know, understand and agree that, in order to promote the better dissemination of the content you publish and disseminate, this platform will communicate with you on the EnergyClub APP platform and other websites, applications, products or terminal devices sublicensed by EnergyClub APP. The content of shows your account</span><span style="font-family:宋体;">’</span><span>s nickname, avatar and other public and non-confidential content.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>4. The intellectual property rights of the above and any other content contained in this service are protected by law. Without the written permission of EnergyClub APP, users or related rights holders, no one may use or create related derivative works in any form.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>5. Any act that we fail to implement this agreement or claim to you our rights, claims or causes of action under this agreement shall not be deemed as a waiver of our right to claim any rights, claims or causes of action against you.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<b><span style="font-size:16pt;line-height:32px;">8. Risks and exemptions</span></b>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1. You understand and agree: In order to provide you with effective services, the EnergyClub APP will use the processor and bandwidth of your terminal device. During the use of this service, you may incur data traffic charges. You need to obtain relevant tariff information from the operator and bear the relevant expenses yourself.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>2. You understand and agree: EnergyClub APP will take reasonable measures to protect your information in accordance with industry standards and best practices. When using this service, this platform will not be liable for losses caused to you by risks that cannot be controlled after reasonable efforts, including but not limited to:</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(A) The user will maintain, upgrade, and adjust the system due to system downtime announced by this platform;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(B) Third-party reasons such as communication equipment failures of the telecommunications sector, computer viruses or hacker attacks, technical problems, network, computer failures, system instability, etc.;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(C) Typhoons, earthquakes, tsunamis, floods, power outages, wars, terrorist attacks, government control and various other causes of force majeure;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(D) Losses and risks caused by user improper operation or use of this service in a way not authorized by this platform;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(E) The content posted by users is forwarded and shared by others, so the risks and responsibilities that may be caused by such dissemination;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(F) Risks such as failure to log in to the platform, incomplete data synchronization, and slow page opening speed caused by the unstable network signal;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(G) Other circumstances beyond the control or reasonably foreseeable by this platform.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>3. You understand and agree that, based on comprehensive factors such as user experience, operational safety of this platform, platform rules and requirements, and healthy development, this platform has the right to choose whom to provide services or cooperate with, and to decide on open functions, data interfaces and related data. The object and scope of the disclosure, and the right to suspend or terminate the provision of this service to users under the following circumstances, including but not limited to:</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(A) Violating laws and regulations or the provisions of this agreement;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(B) Those that affect the user experience;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(C) There are potential safety hazards;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(D) Similar or identical to the existing main functions or functional components of this platform, or can realize the main effects of the above-mentioned functions or functional components;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(F) The interface, style, function, description or user experience is not similar to the platform, which may cause users to believe that the functions or services they use are derived from or authorized by this platform;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(G) Failure to follow the principles of fairness and reciprocity to cooperate with this assessment;</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>(H) Others that do not meet the management requirements of this platform.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>4. The EnergyClub APP will do its best to maintain the security and convenience of all services on the account, but will not be responsible for the deletion or storage failure of information appearing in the service (including but not limited to information published by users). If the normal operation of the service is affected by force majeure events such as technical failures, EnergyClub APP and its partner units promise to cooperate with relevant units as soon as possible to deal with and repair them in a timely manner. However, all losses suffered by users due to this, EnergyClub APP and its partners Cooperative units are not responsible.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>5. Any content, information, etc. released by users during the use of this service does not reflect or represent the views, positions or policies of this platform, and this platform does not assume any responsibility for this. Users should make their own judgments on the content of other users on this platform, and bear all legal responsibilities for themselves, others and society due to the use of the content, including but not limited to the accuracy, authenticity, completeness or utility of the content Risks arising from dependence on gender.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>6. EnergyClub APP may provide links to third-party Internet websites or resources. Unless otherwise stated, EnergyClub APP cannot control the above-mentioned websites or resource links. Therefore, the loss caused by downloading, disseminating, using or relying on the above-mentioned websites or resources Or damage, EnergyClub APP does not assume any responsibility.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>7. EnergyClub APP is always changing and improving the service. The EnergyClub APP may change, add or delete some functions, and may also suspend, restrict or completely stop one or all of the services. The EnergyClub APP does not need to notify in advance for such actions. The user agrees that EnergyClub APP has the right to exercise the above rights and does not need to bear any responsibility to the user or third parties.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<b><span style="font-size:16pt;line-height:32px;">9. Applicable law and dispute resolution</span></b>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1. If EnergyClub APP finds or receives complaints from others that the user violates this agreement, it has the right to delete or block the relevant content at any time without notice, and impose but not limited to restrict or prohibit the use of part or All functions and penalties from account banning to cancellation, and the results of the processing are announced. EnergyClub APP also has the right to refuse to provide services to the subject in accordance with the provisions of this agreement and special rules. If you find that anyone violates the provisions of this agreement or uses the services of this platform in other improper ways, please complain to this platform immediately, and we will deal with it in accordance with the law.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>2. You understand and agree that EnergyClub APP has the right to punish violations of relevant laws and regulations or the provisions of this agreement based on reasonable judgments, take appropriate legal actions against anyone who violates laws and regulations, and save relevant information to relevant departments in accordance with laws and regulations Reports, etc., you are solely responsible for all legal responsibilities arising therefrom.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>3. You understand and agree that you shall be solely responsible for any claims, requirements or losses claimed by a third party due to your violation of the provisions of this agreement, special rules or related terms of service; you shall be solely responsible for the losses suffered by EnergyClub APP as a result It should also be compensated.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>4. This agreement applies to the laws of the People's Republic of China, and excludes the application of all conflicting laws.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>5. For any disputes arising from or related to this agreement, both parties shall try their best to resolve through friendly negotiation; if the negotiation fails, both parties hereby agree to submit to the China International Arbitration Court in accordance with the arbitration rules currently in force at the time of application for arbitration. arbitration. The place of arbitration is Shenzhen, and the arbitration tribunal shall be composed of three arbitrators. The arbitration award is final and binding on both parties.<br />
<br />
</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<b><span style="font-size:16pt;line-height:32px;">10. Supplementary Provisions</span></b>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>1. EnergyClub APP's non-exercise, failure to exercise in a timely manner or inadequate exercise of the rights enjoyed by this agreement or in accordance with the law shall not be regarded as a waiver of this right, nor shall it affect EnergyClub APP's future exercise of this right.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>2. If any clause in this agreement is completely or partially invalid or not enforceable for any reason, the remaining clauses of this agreement shall still be valid and binding, and EnergyClub APP and users shall make every effort to make the agreement set The original intention was realized.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>3. The title in this agreement is provided for convenience only and not as a basis for interpreting this agreement.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>4. The final interpretation right of this agreement belongs to EnergyClub, and all interpretation and modification rights are reserved.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>5. If you have any questions, please contact EnergyClub APP customer service.</span>
	</p>
	<p class="MsoNormal" style="text-align:justify;font-size:10.5pt;font-family:Calibri, sans-serif;">
		<span>6. This agreement will be effective from [9]&nbsp;&nbsp;or [16] or 2020</span>
	</p>
</p>
<p>
	<br />
</p>
        </Modal>
        <!-- <button id="bluecolor" @click="promise">{{ $t("select[14]") }}</button> -->
      </span>
      <div class="line" :class="{ enline: enline }"></div>
    </div>
  
    <div class="lastbutton">
      <button @click="submitInfor" v-if="submit" class="submit">
        {{ $t("select[11]") }}
      </button>
      <button v-else class="success">{{ $t("select[12]") }}</button>
    </div>
  </div>
</template>
<script>
//  $(function(){
//    console.log("haha");

//  })
import uuidv1 from "uuid/v1";
import Qs from "qs";
import crypto from "crypto";
import { log } from "util";
export default {
  name: "index",
  data() {
    return {
      ifchecked:true,
      selectlanguage:true,
      modal1: false,
      modal2:false,
      language: "",
      enline: false,
      uploadDisabled: false,
      uploadDisabledes: false,
      imgUrled: "",
      nowLang: "",
      showlist: true,
      imglist: [],
      dialogImageUrl: "",
      dialogVisible: false,
      showlianjie: false,
      showdetail: false,
      showname: false,
      showqq: false,
      showtel: "",
      lianjie: "",
      detail: "",
      name: "",
      tel: "",
      qq: "",
      jiantou: false,
      jiantou2: false,
      submit: true,
      type: "",
      yanzheng: false,
      options: [],
      value: "",
      InviteCode: "",
      zong: [],
      copyFilelist: [],
      imglistname: [],
    };
  },
  created() {
    //  let sname='Screenshot_2020-09-09-11-45-18-806.png'
    //   let file_name2 = sname.replace(
    //     /(.*\/)*([^.]+).*/gi,
    //     "$2"
    //   );
    //   console.log(file_name2);
    //   // console.log(file_name);
    //   let FileExt2 = sname.replace(/.+\./, "");
    //   console.log(FileExt2);
    //    let name = uuidv1(file_name2) + "." + FileExt2;
    //    console.log(name);
    this.tel = this.getQueryString("mobile");
    this.InviteCode = this.getQueryString("InviteCode");
    this.language = this.getQueryString("language");
    // console.log(this.language);
    // console.log(this.tel);
    // console.log(this.InviteCode);
    if (this.language == "ko" || this.language == "en") {
      this.$i18n.locale = "en";
      this.selectlanguage=false
    }
    if (this.language == "cn") {
      this.$i18n.locale = "cn";
      this.selectlanguage=true
    }
    // console.log(this.selectlanguage);
    this.nowLang = this.$i18n.locale;
    // console.log(this.nowLang);
    this.lanoptions = [
      {
        label: "中文",
      },
      {
        label: "En",
      },
    ];
    if (this.nowLang == "cn") {
      this.options = [
        {
          label: "个人",
        },
        {
          label: "媒体",
        },
        {
          label: "机构",
        },
      ];
    } else {
      this.enline = true;
      this.options = [
        {
          label: "personal",
        },
        {
          label: "media",
        },
        {
          label: "mechanism",
        },
      ];
    }

    // this.acceptphone();
  },
  computed: {},
  mounted() {
    
    // this.toImage();
  },
  actived() {},
  methods: {
    onUpload(e) {
      let file_name = e.target.files[0].name.replace(
        /(.*\/)*([^.]+).*/gi,
        "$2"
      );
      // console.log(file_name);
      let FileExt = e.target.files[0].name.replace(/.+\./, "");
      // console.log(FileExt);
      let name = uuidv1(file_name) + "." + FileExt;
      // console.log(name);
      var formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("path", "bigV");
      $.ajax({
        url: "http://47.101.145.253/batchupfile", //这里是后台接口需要换掉
        type: "POST",
        dataType: "json",
        cache: false,
        data: formData,
        processData: false,
        contentType: false,
        success: (res) => {
          if (res.code === 200) {
            // console.log(res);
          }
        },
        error: function(err) {
          alert("网络错误");
        },
      });
    },
    onprogress() {},
    BeforeRemove(file, fileList) {
      // console.log(file);
    },
    handlePreview(file) {
      // console.log(file);
    },
    handleChange(file, fileList) {
      //  console.log(file);
      //  console.log(fileList);
      // console.log(fileList);
      // console.log(fileList);
      if (fileList.length >= 3) {
        this.uploadDisabled = true;
        this.uploadDisabledes = false;
      }
    },
    // toImage() {
    //   window.scrollTo(0, 0);
    //   this.$nextTick(function() {
    //     html2canvas(this.$refs.imageWrapper).then((canvas) => {
    //       // 转成图片，生成图片地址
    //       this.imgUrled = canvas.toDataURL("image/png");
    //       console.log(this.imgUrled);
    //     });
    //   });
    // },
    promise() {
      if (this.$i18n.locale == "cn") {
        // this.$router.push({ path: "/cn" });
        // window.open("http://www.uenc.net/treaty/manage-cn.html");
      } else {
        // this.$router.push({ path: "/en" });
        // window.location.href = "http://www.uenc.net/treaty/manage-en.html";
        // window.open("http://www.uenc.net/treaty/manage-en.html");
      }
    },

    exceed() {
      // console.log(this.$refs.icon);
      this.$refs.icon.disabled = true;
      if (this.$i18n.locale == "cn") {
        this.$message.error("图片上传个数超出范围");
      } else {
        this.$message.error("The number of pictures uploaded is out of range");
      }
    },
    // 解析地址
    //获取url中的参数方法
    getQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      if (window.location.hash.indexOf("?") < 0) {
        return null;
      }
      let r = window.location.hash.split("?")[1].match(reg);
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    },
    change() {
      this.submit = true;
    },
    change2() {
      this.submit = false;
    },
    // 移除有问题
    handleRemove(file, fileList) {
      // console.log(file);
      for (var i = 0; i < this.copyFilelist.length; i++) {
        if (file.uid == this.copyFilelist[i].uid) {
          this.copyFilelist.splice(i, 1);
          this.imglist.splice(i, 1);
          this.imglistname.splice(i, 1);
          //  this.imglistname.splice(i, 1);;
        }
      }
      // console.log(this.copyFilelist);
      if (fileList.length <= 2) {
        this.uploadDisabled = false;
      }
    },
    beforeUpload(file) {
      // // console.log(file);
      //  var file_name = file.name.replace(/(.*\/)*([^.]+).*/gi, "$2");
      // // console.log(file_name);
      // // file.name.replace(/.+\./, "")
      // // 统一后缀名png结尾
      // var FileExt ='png';
      // // console.log(FileExt);
      // // for (let j = 0; j < this.copyFilelist.length; j++) {
      //   // file文件改写
      //    //var renameFile =new File([原文件], 新文件名,文件类型);png类型
      // const copyFile = new File([file], uuidv1(file_name) + "." + FileExt,{type: "image/png"});
      //      console.log(copyFile);
      // this.copyFilelist.push(file);
      // // console.log(this.copyFilelist);
      // // }
      // this.imglist.push(copyFile);
      // // console.log(this.imglist);
      // for (var n = 0; n < this.imglist.length; n++) {
      //   if (this.imglistname.indexOf(this.imglist[n].name) == -1) {
      //     // 转化字符串去除空格
      //     this.imglistname.push(this.imglist[n].name.toString().replace(/\s/g, ""));
      //   }
      // }
      this.uploadFile(file);
      // console.log(file);
      //获取文件后缀
    },
    // time(time) {
    //       let month = time.getMonth() + 1;  // 月
    //       let date = time.getDate();  // 日
    //       let hh = time.getHours();  // 时
    //       let mm = time.getMinutes();  // 分
    //       let ss = time.getSeconds();  // 秒
    //       if (hh >=0 && hh<10){hh= '0' + hh;}
    //       if (mm >=0 && mm<10){mm= '0' + mm;}
    //       if (ss >=0 && ss<10){ss= '0' + ss;}
    //       if (month < 10){month= '0' + month;}
    //       if (date < 10){date= '0' + date;}
    //       return time.getFullYear().toString() + month.toString() + date.toString() + hh.toString() + mm.toString() + ss.toString();
    //     },
    // 上传图片
    uploadFile(file) {
      //  console.log(file);
      var file_name = file.name.replace(/(.*\/)*([^.]+).*/gi, "$2");
      // console.log(file_name);
      // file.name.replace(/.+\./, "")
      // 统一后缀名png结尾
      // var FileExt ='png';
      var FileExt =file.name.replace(/.+\./, "")
      // console.log(FileExt);
      // for (let j = 0; j < this.copyFilelist.length; j++) {
        // file文件改写
         //var renameFile =new File([原文件], 新文件名,文件类型);png类型   this.time(new Date())
        //  const copyFile = new File([file],  uuidv1(file_name).toString().replace(/\s/g, "") + "." + FileExt,{type: "image/png"});
      const copyFile = new File([file],  uuidv1(file_name).toString().replace(/\s/g, "") + "." + FileExt);
          //  console.log(copyFile);
      this.copyFilelist.push(file);
      // console.log(this.copyFilelist);
      // }
      this.imglist.push(copyFile);
      // console.log(this.imglist);
      for (var n = 0; n < this.imglist.length; n++) {
        if (this.imglistname.indexOf(this.imglist[n].name) == -1) {
          // 转化字符串去除空格
          this.imglistname.push(this.imglist[n].name.toString().replace(/\s/g, ""));
        }
      }
      // console.log(this.imglist);
      //   console.log(this.imglistname);
      let userId = "bigV";
      //  console.log(item);
      //获取随机id
      const form = new FormData(); // FormData 对象
      form.append("file", copyFile); // 文件对象  'upload'是后台接收的参数名
      form.append("path", userId);
      //  console.log(form);
      this.$http
      // 测试版
      //47.99.57.15
      // 47.101.145.253
      // 正式版
      // 47.105.215.191
        .post("http://47.98.110.210/batchupfile", form, "form")
        .then((res) => {
          // console.log(res);
          if ((res.data.code = 200)) {
            if (this.$i18n.locale == "cn") {
              this.$message({
                message: "文件上传成功",
                type: "success",
              });
            } else {
              this.$message({
                message: "File upload successfully",
                type: "success",
              });
            }
          }
          // console.log(res);
        })
        .catch((data) => {
          if (this.$i18n.locale == "cn") {
            this.$message.error("上传失败，请稍后重试");
          } else {
            this.$message.error("Upload failed, please try again later");
          }
        });
    },
    submitInfor() {
      // console.log(this.imglistname);
       if(this.$refs.checked.checked==false){
         if (this.$i18n.locale == "cn") {
          this.$message.error("请勾选按钮");
            return false;
        } else {
          this.$message.error("Please check the button");
          return false;
        }
       }
          // console.log(this.imglistname);
      // 入住类型
      if (
        this.$refs.optionvalue.value == "个人" ||
        this.$refs.optionvalue.value == "personal"
      ) {
        this.type = 1;
      }
      if (
        this.$refs.optionvalue.value == "媒体" ||
        this.$refs.optionvalue.value == "media"
      ) {
        this.type = 2;
      }
      if (
        this.$refs.optionvalue.value == "机构" ||
        this.$refs.optionvalue.value == "mechanism"
      ) {
        this.type = 3;
      }
      //  console.log(this.type);
      // console.log(this.type);
      let that = this;
      // form表单设置不能为空
      if (
        // 入住类型
        this.$refs.optionvalue.value == "" ||
        // 相关链接
        this.lianjie == "" ||
        // 简介
        this.detail == "" ||
        // 运营人员姓名
        this.name == "" ||
        // 手机号
        this.tel == "" ||
        // 微信QQ号
        this.qq == "" ||
        // 复选框
        this.imglistname.length < 1
      ) {
        if (this.$i18n.locale == "cn") {
          this.$message.error("请填写完整的信息");
          return false;
        } else {
          this.$message.error("Please fill in the complete information");
          return false;
        }
      } else {
        var datalist = Qs.stringify({
          type: this.type,
          url: this.lianjie,
          content: this.detail,
          name: this.name,
          mobile: this.tel,
          InviteCode: this.InviteCode,
          contact: this.qq,
          newsImgs: this.imglistname,
        });
        // this.$refs.icon.submit();
        that.$http
        // 测试版
        // 192.168.1.60 47.98.110.210
        //47.105.215.191
          .post("http://47.98.110.210/weimi/news/settlement", datalist, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          })
          .then((res) => {
            // console.log(res);
            if (res.data.code == 200) {
              this.$message({
                message: res.data.result,
                type: "success",
              });
              setTimeout(this.change2, 0);
              setTimeout(this.change, 5000);
              this.$refs.icon.clearFiles();
              this.uploadDisabled = false;
              (this.lianjie = ""),
                (this.detail = ""),
                (this.name = ""),
                (this.qq = "");
              this.imglist.length = 0;
              this.copyFilelist.length = 0;
            } else {
              this.$message.error(res.data.result);
            }
          });
      }
    },
    // label设置
    // 链接
    fshowlianjie() {
      this.showlianjie = true;
    },
    fshowlianjieb() {
      if (this.lianjie == "") {
        this.showlianjie = false;
      }
    },
    // 简介
    fshowdetail() {
      this.showdetail = true;
    },
    fshowdetailb() {
      if (this.detail == "") {
        this.showdetail = false;
      }
    },
    // 名字
    fshowname() {
        window.scrollTo(0,280);
      this.showname = true;
    },
    fshownameb() {
      if (this.name == "") {
        this.showname = false;
      }
    },

    // qq号
    fshowqq() {
       window.scrollTo(0,410);
      this.showqq = true;
    },
    fshowqqb() {
      let wxreg = / ^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
      let qqreg = /^[1-9][0-9]{4,14}$/;
      if (!wxreg.test(this.qq) && !qqreg.test(this.qq)) {
        if (this.$i18n.locale == "cn") {
          this.$message({
            message: "请填写正确的QQ或微信号",
            type: "error",
            offset: 100,
          });
        } else {
          this.$message.error("Please fill in the correct QQ or WeChat ID");
        }
        this.qq = "";
        this.showqq = false;
      }
      window.scrollTo(0,200);
    },
    jiantouRotate() {
      this.jiantou = !this.jiantou;
    },
    jiantouRotate2() {
      this.jiantou2 = !this.jiantou2;
    },
    valueSelect() {
      // console.log(this.$refs.optionvalue.value);
    },
    valueSelect2() {
      this.options = "";
      // console.log(this.$refs.optionvalue2.value);
      if (this.$refs.optionvalue2.value == "中文") {
        this.enline = false;
        this.options = [
          {
            label: "个人",
          },
          {
            label: "媒体",
          },
          {
            label: "机构",
          },
        ];
        if (this.$i18n.locale == "en") {
          this.$i18n.locale = "cn";
          this.selectlanguage=true
          // localStorage.setItem("lang", "cn");
          this.options = [
            {
              label: "个人",
            },
            {
              label: "媒体",
            },
            {
              label: "机构",
            },
          ];

          // setTimeout(() => {
          //   this.$router.go(0);
          // }, 1500);
        } else {
          return false;
        }
      }
      if (this.$refs.optionvalue2.value == "En") {
        this.enline = true;
        this.options = [
          {
            label: "personal",
          },
          {
            label: "media",
          },
          {
            label: "mechanism",
          },
        ];
        if (this.$i18n.locale == "cn") {
          this.$i18n.locale = "en";
           this.selectlanguage=false
          // localStorage.setItem("lang", "en");
          this.options = [
            {
              label: "personal",
            },
            {
              label: "media",
            },
            {
              label: "mechanism",
            },
          ];
          // setTimeout(() => {
          //   this.$router.go(0);
          // }, 1500);
        } else {
          return false;
        }
      }
    },
  },
  // 手机号
  // fshowtel() {
  //   this.showtel = true;
  // },
  // fshowtelb() {
  //   let myreg = /^\d{1,}$/;
  //   if (!myreg.test(this.tel)) {
  //     if (this.$i18n.locale == "cn") {
  //       this.$message.error("请填写正确的手机号");
  //     } else {
  //       this.$message.error("Please fill in the correct phone number");
  //     }
  //     this.tel = "";
  //     this.showtel = false;
  //   }
  // },
  // language() {
  //   if (this.$i18n.locale == "cn") {
  //     this.$i18n.locale = "en";
  //     localStorage.setItem("lang", "en");
  //     setTimeout(() => {
  //       this.$router.go(0);
  //     }, 1500);
  //   } else if (this.$i18n.locale == "en") {
  //     this.$i18n.locale = "cn";
  //     localStorage.setItem("lang", "cn");
  //     setTimeout(() => {
  //       this.$router.go(0);
  //     }, 1500);
  //   }
  // },
  // acceptphone() {
  //   var phones = Qs.stringify({
  //     phone: this.tel,
  //     InviteCode: this.InviteCode,
  //   });
  //   this.$http
  //     .post("http://192.168.1.60:8080/weimi/news/checkV", phones)
  //     .then((res) => {
  //       // console.log(res);
  //       if (res.data.code == 200) {
  //         this.yanzheng = false;
  //       }
  //       if (res.data.code == 400) {
  //         if (this.$i18n.locale == "cn") {
  //           this.$message.error(res.data.result);
  //         } else {
  //           this.$message.error(
  //             "The application has been successful, no need to apply again"
  //           );
  //         }
  //       }
  //     })
  //     .catch((data) => {
  //       if (this.$i18n.locale == "cn") {
  //         this.$message.error("请求失败，请稍后重试");
  //       } else {
  //         this.$message.error("Upload failed, please try again later");
  //       }
  //     });
  // },
};
</script>
<style lang="less">
.ivu-btn-text{
  display: none!important;
}
.ivu-modal-footer{
  position: sticky!important;
  bottom: -1px!important;
background-color: white!important;
  margin: 0 auto;
  width: 100%;
}
.ivu-modal-mask{
 
}

.ivu-modal-wrap{
  height:500px;
  top: 10px;
}
.ivu-icon-ios-close{
  left:10px!important;
  top: -10px!important;
  color: gray!important;
  border-radius: 50%;
  border: 2px solid gray;
  transform: scale(0.5);
}
.enline {
  width: 133px !important;
  border: 1px solid rgba(0, 182, 255, 1) !important;
  position: relative !important;
  left: 175px !important;
}
#bluecolor {
  position: relative;
  left: -3px;
  background: rgba(22, 32, 89, 1);
  color: rgba(0, 182, 255, 1);
  border: none;
  outline: none;
  cursor: pointer;
}
.disabled .el-upload--picture-card {
  display: none;
}
.disabledes .el-upload--picture-card {
  display: block !important;
}
#language {
  font-size: 13px;
  // background: rgba(22, 32, 89, 1);
  border: none;
  outline: none;
  margin-right: 0px;
  color: rgba(0, 182, 255, 1)!important;
  padding: 0;
  height: 10px;
  span{
     color: rgba(0, 182, 255, 1)!important;
     margin-left: -9px;
   position: relative;
   top: -7px;
  }
}
.el-icon-delete {
  position: relative;
  left: 15px !important;
  top: -30px !important;
  display: inline-block;
}
.el-icon-zoom-in {
  display: none;
}
#phone {
  font-size: 9px;
  font-family: "苹方-简";
  font-weight: normal;
  line-height: 13px;
  color: #00b6ff;
  opacity: 1;
  position: relative;
  top: -10px;
}
.is-success {
  position: relative;
  top: 25px;
  width: 95px !important;
  height: 95px !important;
}
.el-upload-list__item-actions {
  width: 95px !important;
  height: 95px !important;
}
.el-upload--picture-card {
  width: 95px;
  height: 95px;
}
.is-ready {
  width: 85px !important;
  height: 85px !important;
  position: relative;
  top: 25px;
}
.el-icon-plus {
  position: relative;
  top: -15px;
}
.select {
  width: 305px;
  height: 40px;
  margin: 0 auto;
  position: relative;
  top: 35px;
  select::-ms-expand {
    display: none;
  }
  select {
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-family: "苹方-简";
    font-weight: normal;
    border: solid 1px #000;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 25px;
    border: none;
    outline: none;
    padding-left: 15px;
    background:  rgba(51, 51, 51, 0.1);
    color:rgba(51, 51, 51, 0.5);
  }
  option {
   background:  rgba(51, 51, 51, 0.1);
    color:rgba(51, 51, 51, 0.5);
    border: none;
  }
  img {
    width: 7.41px;
    height: 13.41px;
    position: relative;
    left: 283px;
    top: -27px;
  }
}
.jiantou {
  transform: rotate(90deg);
}
@keyframes move {
  from {
    position: relative;
    top: 25px;
  }
  to {
    position: relative;
    top: -5px;
    font-size: 9px;
    font-family: "苹方-简";
    font-weight: normal;
    line-height: 13px;
    color: rgba(0, 182, 255, 1);
    opacity: 1;
  }
}
.movename {
  animation: move 0.5s linear;
  animation-fill-mode: forwards;
}
input {
  border: none;
  outline: none;
  width: 305px;
  height: 40px;
  opacity: 1;
  // border-radius: 25px;
  color: aliceblue;
  -webkit-transform: translateZ(0);
-moz-transform: translateZ(0);
-ms-transform: translateZ(0);
-o-transform: translateZ(0);
transform: translateZ(0);/*解决加入js后input框输入瞬间变白的现象*/
}
input:focus {
  border: 1px solid rgba(0, 182, 255, 1);
}
.index {
  width: 100%;
  border-radius: 0px !important;
  border: none;
  height: 900px; 
background:rgba(255, 255, 255, 1);
  position: relative;
  .headertop {
    width: 305px;
    height: 40px;
    margin: 0 auto;
    position: relative;
    top: 10px;
    select::-ms-expand {
      display: none;
    }
    select {
      position: relative;
    top: 0px;
      width: 305px;
      height: 40px;
      font-size: 14px;
      font-family: "苹方-简";
      font-weight: normal;
      border: solid 1px #000;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border-radius: 25px;
      border: none;
      outline: none;
      padding-left: 15px;
     
background: rgba(51, 51, 51, 0.1);

      color: rgba(51, 51, 51, 0.5);
      margin: 0;
    }
    option {
     background: rgba(51, 51, 51, 0.1);
      color: rgba(51, 51, 51, 0.5);
      border: none;
    }
    img {
      width: 7.41px !important;
      height: 13.41px !important;
      position: relative !important;
      left: 283px !important;
      top: -25px !important;
    }
    .headertitle {
      width: 100%;
      text-align: center;
      height: 25px;
      font-size: 18px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 25px;
      color: rgba(255, 255, 255, 1);
      opacity: 1;
    }
    img {
      width: 12.82px;
      height: 20.82px;
      position: relative;
      top: 2px;
      left: 15px;
    }
    button {
      position: absolute;
      right: 0;
    }
  }
  .lianjie {
    width: 305px;
    height: auto;
    margin: 0 auto;
    position: relative;
    top: 52px;
    display: flex;
    flex-direction: column;
    label {
      font-size: 14px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
      color: rgba(51, 51, 51, 0.5);
      position: relative;
      top: 25px;
      left: 15px;
    }
    input {
      width: 305px;
      height: 40px;
      opacity: 1;
      border-radius: 25px;
      margin: 0 auto;
      position: relative;
      padding-left: 15px;
      background: rgba(51, 51, 51, 0.1);
       color: rgba(51, 51, 51, 0.5) ;
    }
    .lianjietil {
      width: 279px;
      height: 13px;
      font-size: 9px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
      color: rgba(0, 182, 255, 1);
      opacity: 1;
      margin: 0 auto;
    }
  }
  .detail {
    width: 305px;
    height: auto;
    margin: 0 auto;
    position: relative;
    top: 69px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
   

      color: rgba(51, 51, 51, 0.5);
      position: relative;
      top: 25px;
      left: 15px;
    }
    textarea {
      width: 305px;
      height: 60px;
     color: rgba(51, 51, 51,0.5);
      border-radius: 25px;
      margin: 0 auto;
      position: relative;
      padding-left: 15px;
     background: rgba(51, 51, 51, 0.1);
      border: none;
      resize: none;
    }
    .lianjietil {
      width: 279px;
      height: 13px;
      font-size: 9px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
      color: rgba(0, 182, 255, 1);
      opacity: 1;
      margin: 0 auto;
    }
  }
  .fujian {
    width: 305px;
    height: auto;
    position: relative;
    top: 89px;
    margin: 0 auto;
    .fujiantop {
      display: flex;
      flex-direction: row;
      align-items: center;
      .line {
        width: 2px;
        height: 20px;
        color: rgba(0, 182, 255, 1);
        background:  rgba(0, 182, 255, 1);
        // border: 2px solid rgba(0, 182, 255, 1);
        opacity: 1;
      }
      p {
        font-size: 16px;
        font-family: "苹方-简";
        font-weight: normal;
        line-height: 13px;
        color:rgba(51, 51, 51, 1);
        opacity: 1;
        position: relative;
        left: 11px;
      }
    }
    .fujiancontent {
      position: relative;
      top: 10px;
      font-size: 12px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 18px;
      color:rgba(51, 51, 51, 0.5);
     
    }
    .el-upload {
      position: relative;
      top: 25px;
    }
  }
  .name {
    width: 305px;
    height: auto;
    margin: 0 auto;
    position: relative;
    top: 133px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
      color:rgba(51, 51, 51, 0.5);
      position: relative;
      top: 25px;
      left: 15px;
    }
    input {
      width: 305px;
      height: 40px;
      opacity: 1;
      border-radius: 25px;
      margin: 0 auto;
      position: relative;
      padding-left: 15px;
      background: rgba(51, 51, 51, 0.1);
       color:rgba(51, 51, 51, 0.5);
    }
    .lianjietil {
      width: 279px;
      height: 13px;
      font-size: 9px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
      color: rgba(0, 182, 255, 1);
      opacity: 1;
      margin: 0 auto;
    }
  }
  .tel {
    width: 305px;
    height: auto;
    margin: 0 auto;
    position: relative;
    top: 151px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
       color:rgba(51, 51, 51, 0.5);
      position: relative;
      top: 25px;
      left: 15px;
    }
    input {
      width: 305px;
      height: 40px;
      opacity: 1;
      border-radius: 25px;
      margin: 0 auto;
      position: relative;
      padding-left: 15px;
      background: rgba(51, 51, 51, 0.1);
      color:rgba(51, 51, 51, 0.5);
    }
    .lianjietil {
      width: 279px;
      height: 13px;
      font-size: 9px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
      color: rgba(0, 182, 255, 1);
      opacity: 1;
      margin: 0 auto;
    }
  }
  .qq {
    width: 305px;
    height: auto;
    margin: 0 auto;
    position: relative;
    top: 169px;
    display: flex;
    flex-direction: column;
  
      color:rgba(51, 51, 51, 0.5);
    label {
      font-size: 14px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
     color:rgba(51, 51, 51, 0.5);
      position: relative;
      top: 25px;
      left: 15px;
    }
    input {
      width: 305px;
      height: 40px;
      opacity: 1;
      border-radius: 25px;
      margin: 0 auto;
      position: relative;
      padding-left: 15px;
    background: rgba(51, 51, 51, 0.1);
    color: rgba(51, 51, 51, 0.5) ;
    }
    .lianjietil {
      width: 279px;
      height: 13px;
      font-size: 9px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
      color: rgba(0, 182, 255, 1);
      opacity: 1;
      margin: 0 auto;
    }
  }
  .checkbox {
    width: 305px;
    height: auto;
    margin: 0 auto;
    position: relative;
    top: 184px;
    .ivu-btn-primary{
  background: none;
}
    .line {
      width: 65px;
      height: 1px;
      background:rgba(0, 182, 255, 1) ;
      // border: 1px solid rgba(0, 182, 255, 1);
      position: relative;
      left: 118px;
    }
    input {
      width: 17px;
      height: 17px;
      border: 1px solid rgba(255, 255, 255, 1);
      opacity: 1;
      border-radius: 4px;
      position: relative;
      top: 3px;
    }
    span {
      position: relative;
      left: 10px;
      font-size: 12px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 12px;
      color: rgba(51, 51, 51, 1);
     
      // cursor: pointer;
    }
  }
  .lastbutton {
    width: 305px;
    height: 40px;
    position: relative;
    top: 234px;
    margin: 0 auto;

    .submit {
      width: 305px;
      height: 40px;
      background:rgba(47, 116, 243, 1);
      opacity: 1;
      border-radius: 25px;
      margin: 0 auto;
      border: none;
      font-size: 14px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
      color: rgba(255, 255, 255, 1);
    }
    .success {
      width: 305px;
      height: 40px;
      background: green;
      opacity: 1;
      border-radius: 25px;
      margin: 0 auto;
      border: none;
      font-size: 14px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
      color: rgba(255, 255, 255, 1);
      text-align: center;
    }
  }
}
</style>
