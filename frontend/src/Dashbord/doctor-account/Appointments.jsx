/* eslint-disable react/prop-types */
import { formateDate } from '../../utils/formateDate';

const Appointments = ({ appointments }) => {
    return (
        <table className='w-full text-left text-sm text-gray-500'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700'>
                <tr>
                    <th scope='col' className='px-6 py-3'>
                        Name
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Gender
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Payment
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Price
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Booked on
                    </th>
                </tr>
            </thead>

            <tbody>
                {appointments?.map(item => (
                    <tr key={item._id}>
                        <th
                            scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap '
                        >
                            <img
                                src={item.user.photo}
                                alt=""
                                className='w-10 h-10 rounded-full'
                            />

                            <div className="pl-3">
                                <div className="text-base font-semibold">{item.user.name}</div>
                                <div className="text-normal text-gray-500">{item.user.email}</div>
                            </div>
                        </th>

                        <td className='px-6 py-4'>{item.user.gender}</td>
                        <td className='px-6 py-4'>
                            {item.isPaid && (
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 bg-green-500 rounded-full mr-2">
                                    </div>
                                    <div>Paid</div>
                                </div>
                            )}

                            {!item.isPaid && (
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 bg-red-500 rounded-full mr-2">
                                    </div>
                                    <div>Unpaid</div>
                                </div>
                            )}

                        </td>
                        <td className='px-6 py-4'>{item.ticketPrice}</td>
                        <td className='px-6 py-4'>{formateDate(item.createdAt)}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Appointments